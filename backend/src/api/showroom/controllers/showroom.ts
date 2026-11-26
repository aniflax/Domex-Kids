import {
  audit,
  expireStaleReservations,
  getActiveSession,
  getOrCreateCategoryCode,
  grantAccess,
  isMasterPassActive,
  regenerateCategoryCode,
  requireAuth,
  releaseReservation,
  RESERVATION_MINUTES,
} from '../../../utils/portal';

/**
 * A draft-and-publish category has separate draft + published rows; relation
 * links can point at either. Resolve the document to the full set of row ids so
 * we can list products/subcategories reliably, and expose one canonical row
 * (prefer the published one) for stable access/code records.
 */
async function resolveCategory(strapi: any, documentId: string) {
  const rows = await strapi.db.query('api::category.category').findMany({
    where: { documentId },
    populate: { image: true },
  });
  if (!rows.length) return null;
  const canonical = rows.find((r: any) => r.publishedAt) ?? rows[0];
  return { rows, ids: rows.map((r: any) => r.id), canonical };
}

async function accessForSession(strapi: any, sessionId: number) {
  const accesses = await strapi.db.query('api::category-access.category-access').findMany({
    where: { session: sessionId, active: true },
    populate: { category: true },
  });
  const now = new Date().toISOString();
  return accesses.filter((a: any) => !a.expiresAt || a.expiresAt > now);
}

async function isCategoryUnlocked(strapi: any, session: any, categoryIds: number[]) {
  if (isMasterPassActive(session)) return true;
  const accesses = await accessForSession(strapi, session.id);
  return accesses.some((a: any) => categoryIds.includes(a.category?.id));
}

function publicSession(session: any) {
  return {
    id: session.id,
    status: session.status,
    checkInAt: session.checkInAt,
    checkOutAt: session.checkOutAt ?? null,
    masterPassExpiresAt: session.masterPassExpiresAt ?? null,
    masterPassActive: isMasterPassActive(session),
  };
}

function publicSubcategory(s: any) {
  return { documentId: s.documentId, title: s.title, image: s.image ?? null };
}

function publicProduct(product: any) {
  return {
    documentId: product.documentId,
    title: product.title,
    tagline: product.tagline ?? null,
    subText: product.subText ?? null,
    price: product.price ?? null,
    photos: product.photos ?? [],
    subcategory: product.subcategory
      ? { documentId: product.subcategory.documentId, title: product.subcategory.title }
      : null,
    variants: (product.variants ?? []).map((v: any) => ({
      documentId: v.documentId,
      color: v.color,
      size: v.size,
      sku: v.sku ?? null,
      stock: v.stock ?? 0,
      available: Math.max(0, (v.stock ?? 0) - (v.reserved ?? 0)),
    })),
  };
}

function publicReservation(r: any) {
  return {
    id: r.id,
    quantity: r.quantity,
    status: r.status,
    expiresAt: r.expiresAt ?? null,
    color: r.color,
    size: r.size,
    sku: r.sku ?? null,
    product: r.product
      ? { documentId: r.product.documentId, title: r.product.title, photos: r.product.photos ?? [] }
      : null,
    variant: r.variant ? { documentId: r.variant.documentId, color: r.variant.color, size: r.variant.size } : null,
  };
}

async function activeReservations(strapi: any, sessionId: number) {
  return strapi.db.query('api::reservation.reservation').findMany({
    where: { session: sessionId, status: 'active' },
    populate: { product: true, variant: true },
    orderBy: { reservedAt: 'asc' },
  });
}

export default ({ strapi }: { strapi: any }) => ({
  async checkIn(ctx: any) {
    const user = requireAuth(ctx);
    const { deviceLabel } = ctx.request.body ?? {};
    const now = new Date().toISOString();
    let session = await getActiveSession(strapi, user.id);
    if (!session) {
      session = await strapi.db.query('api::store-session.store-session').create({
        data: { customer: user.id, status: 'checked_in', checkInAt: now, deviceLabel: deviceLabel ?? null },
      });
      await audit(strapi, { actorId: user.id, action: 'check_in', targetType: 'store-session', targetId: session.documentId });
    }
    return ctx.send({ session: publicSession(session) });
  },

  async home(ctx: any) {
    const user = requireAuth(ctx);
    const session = await getActiveSession(strapi, user.id, { create: true });
    await expireStaleReservations(strapi);
    const master = isMasterPassActive(session);

    const catRows = await strapi.db.query('api::category.category').findMany({
      populate: { image: true },
      orderBy: { title: 'asc' },
    });
    const idToDoc = new Map<number, string>(catRows.map((r: any) => [r.id, r.documentId]));
    const publishedCats = new Map<string, any>();
    for (const r of catRows) if (r.publishedAt && !publishedCats.has(r.documentId)) publishedCats.set(r.documentId, r);

    const subs = await strapi.db.query('api::subcategory.subcategory').findMany({
      where: { publishedAt: { $notNull: true } },
      populate: { image: true, category: true },
    });
    const subsByDoc = new Map<string, any[]>();
    for (const s of subs) {
      const catId = typeof s.category === 'object' ? s.category?.id : s.category;
      const catDoc = idToDoc.get(catId);
      if (!catDoc) continue;
      const list = subsByDoc.get(catDoc) ?? [];
      list.push(publicSubcategory(s));
      subsByDoc.set(catDoc, list);
    }

    const accesses = master ? [] : await accessForSession(strapi, session.id);
    const unlockedDocs = new Set<string>();
    for (const a of accesses) {
      const catId = typeof a.category === 'object' ? a.category?.id : a.category;
      const catDoc = idToDoc.get(catId);
      if (catDoc) unlockedDocs.add(catDoc);
    }

    const cartCount = await strapi.db.query('api::reservation.reservation').count({
      where: { session: session.id, status: 'active' },
    });

    return ctx.send({
      session: publicSession(session),
      masterPassActive: master,
      cartCount,
      categories: Array.from(publishedCats.values()).map((c: any) => ({
        documentId: c.documentId,
        title: c.title,
        image: c.image ?? null,
        unlocked: master || unlockedDocs.has(c.documentId),
        subcategories: subsByDoc.get(c.documentId) ?? [],
      })),
    });
  },

  async category(ctx: any) {
    const user = requireAuth(ctx);
    const session = await getActiveSession(strapi, user.id, { create: true });
    const resolved = await resolveCategory(strapi, ctx.params.documentId);
    if (!resolved) return ctx.notFound('Category not found');

    const unlocked = await isCategoryUnlocked(strapi, session, resolved.ids);
    const subs = await strapi.db.query('api::subcategory.subcategory').findMany({
      where: { category: { $in: resolved.ids }, publishedAt: { $notNull: true } },
      populate: { image: true },
    });
    const category = {
      documentId: resolved.canonical.documentId,
      title: resolved.canonical.title,
      image: resolved.canonical.image ?? null,
      subcategories: subs.map(publicSubcategory),
    };
    if (!unlocked) return ctx.send({ locked: true, category });

    const products = await strapi.db.query('api::product.product').findMany({
      where: { category: { $in: resolved.ids }, publishedAt: { $notNull: true } },
      populate: { photos: true, subcategory: true, variants: true },
    });
    return ctx.send({ locked: false, category, products: products.map(publicProduct) });
  },

  async unlockCode(ctx: any) {
    const user = requireAuth(ctx);
    const { categoryDocumentId, code } = ctx.request.body ?? {};
    if (!categoryDocumentId || !code) return ctx.badRequest('categoryDocumentId and code are required');
    const resolved = await resolveCategory(strapi, categoryDocumentId);
    if (!resolved) return ctx.notFound('Category not found');
    const category = resolved.canonical;
    const session = await getActiveSession(strapi, user.id, { create: true });
    const record = await getOrCreateCategoryCode(strapi, category.id);
    if (String(record.code) !== String(code)) {
      return ctx.send({ ok: false, message: 'Incorrect code' });
    }
    await grantAccess(strapi, session, category, 'code');
    await regenerateCategoryCode(strapi, record);
    await audit(strapi, {
      actorId: user.id,
      action: 'unlock.code',
      targetType: 'category',
      targetId: category.documentId,
      meta: { previousVersion: record.version },
    });
    return ctx.send({ ok: true, category: { documentId: category.documentId, title: category.title } });
  },

  async unlockScan(ctx: any) {
    const user = requireAuth(ctx);
    const { token } = ctx.request.body ?? {};
    if (!token) return ctx.badRequest('token is required');
    const record = await strapi.db.query('api::category-code.category-code').findOne({
      where: { qrToken: token },
      populate: { category: true },
    });
    if (!record?.category?.documentId) return ctx.send({ ok: false, message: 'This QR code is no longer valid' });
    const resolved = await resolveCategory(strapi, record.category.documentId);
    if (!resolved) return ctx.send({ ok: false, message: 'This QR code is no longer valid' });
    const session = await getActiveSession(strapi, user.id, { create: true });
    await grantAccess(strapi, session, resolved.canonical, 'qr');
    await regenerateCategoryCode(strapi, record);
    await audit(strapi, {
      actorId: user.id,
      action: 'unlock.qr',
      targetType: 'category',
      targetId: resolved.canonical.documentId,
    });
    return ctx.send({ ok: true, category: { documentId: resolved.canonical.documentId, title: resolved.canonical.title } });
  },

  async getCart(ctx: any) {
    const user = requireAuth(ctx);
    const session = await getActiveSession(strapi, user.id, { create: true });
    await expireStaleReservations(strapi);
    const items = await activeReservations(strapi, session.id);
    return ctx.send({ items: items.map(publicReservation) });
  },

  async addToCart(ctx: any) {
    const user = requireAuth(ctx);
    const { variantDocumentId, quantity } = ctx.request.body ?? {};
    const qty = Math.max(1, Number.parseInt(quantity, 10) || 1);
    if (!variantDocumentId) return ctx.badRequest('variantDocumentId is required');
    const session = await getActiveSession(strapi, user.id, { create: true });
    await expireStaleReservations(strapi);

    return strapi.db.transaction(async () => {
      const variant = await strapi.db.query('api::variant.variant').findOne({
        where: { documentId: variantDocumentId },
        populate: { product: true },
      });
      if (!variant) return ctx.notFound('Variant not found');
      const available = (variant.stock || 0) - (variant.reserved || 0);
      if (available < qty) return ctx.send({ ok: false, message: 'Not enough stock available', available });
      const productId = typeof variant.product === 'object' ? variant.product?.id : variant.product;
      const existing = await strapi.db.query('api::reservation.reservation').findOne({
        where: { session: session.id, variant: variant.id, status: 'active' },
      });
      const expiresAt = new Date(Date.now() + RESERVATION_MINUTES * 60 * 1000).toISOString();
      if (existing) {
        await strapi.db.query('api::reservation.reservation').update({
          where: { id: existing.id },
          data: { quantity: existing.quantity + qty, expiresAt },
        });
      } else {
        await strapi.db.query('api::reservation.reservation').create({
          data: {
            session: session.id,
            product: productId,
            variant: variant.id,
            color: variant.color,
            size: variant.size,
            sku: variant.sku ?? null,
            quantity: qty,
            status: 'active',
            reservedAt: new Date().toISOString(),
            expiresAt,
          },
        });
      }
      await strapi.db.query('api::variant.variant').update({
        where: { id: variant.id },
        data: { reserved: (variant.reserved || 0) + qty },
      });
      return ctx.send({ ok: true, available: available - qty });
    });
  },

  async updateCart(ctx: any) {
    const user = requireAuth(ctx);
    const { quantity } = ctx.request.body ?? {};
    const qty = Number.parseInt(quantity, 10);
    if (!Number.isFinite(qty) || qty < 1) return ctx.badRequest('quantity must be 1 or more');
    const session = await getActiveSession(strapi, user.id, { create: true });
    const reservation = await strapi.db.query('api::reservation.reservation').findOne({
      where: { id: ctx.params.id, session: session.id, status: 'active' },
      populate: { variant: true },
    });
    if (!reservation) return ctx.notFound('Cart item not found');
    const delta = qty - reservation.quantity;
    if (delta > 0) {
      const available = (reservation.variant.stock || 0) - (reservation.variant.reserved || 0);
      if (available < delta) return ctx.send({ ok: false, message: 'Not enough stock available', available });
    }
    await strapi.db.transaction(async () => {
      await strapi.db.query('api::reservation.reservation').update({ where: { id: reservation.id }, data: { quantity: qty } });
      await strapi.db.query('api::variant.variant').update({
        where: { id: reservation.variant.id },
        data: { reserved: Math.max(0, (reservation.variant.reserved || 0) + delta) },
      });
    });
    return ctx.send({ ok: true });
  },

  async removeCart(ctx: any) {
    const user = requireAuth(ctx);
    const session = await getActiveSession(strapi, user.id, { create: true });
    const reservation = await strapi.db.query('api::reservation.reservation').findOne({
      where: { id: ctx.params.id, session: session.id, status: 'active' },
      populate: { variant: true },
    });
    if (!reservation) return ctx.notFound('Cart item not found');
    await releaseReservation(strapi, reservation, 'released');
    return ctx.send({ ok: true });
  },

  async request(ctx: any) {
    const user = requireAuth(ctx);
    const session = await getActiveSession(strapi, user.id, { create: true });
    await expireStaleReservations(strapi);
    const items = await activeReservations(strapi, session.id);
    if (!items.length) return ctx.send({ ok: false, message: 'Your cart is empty' });

    const orderItems = items.map((r: any) => ({
      title: r.product?.title ?? 'Item',
      productDocumentId: r.product?.documentId ?? null,
      variantDocumentId: r.variant?.documentId ?? null,
      color: r.color,
      size: r.size,
      sku: r.sku ?? null,
      quantity: r.quantity,
    }));
    const totalItems = items.reduce((sum: number, r: any) => sum + r.quantity, 0);

    const order = await strapi.documents('api::order.order').create({
      data: {
        session: session.id,
        customer: user.id,
        items: orderItems,
        status: 'requested',
        requestedAt: new Date().toISOString(),
        totalItems,
      },
    });
    for (const r of items) {
      await strapi.db.query('api::reservation.reservation').update({
        where: { id: r.id },
        data: { status: 'converted', expiresAt: null },
      });
    }
    await audit(strapi, {
      actorId: user.id,
      action: 'request_items',
      targetType: 'order',
      targetId: order.documentId,
      meta: { totalItems },
    });
    return ctx.send({ ok: true, order: { documentId: order.documentId, totalItems } });
  },
});
