import {
  audit,
  getActiveSession,
  getOrCreateCategoryCode,
  grantAccess,
  isMasterPassActive,
  MASTER_PASS_HOURS,
  portalBaseUrl,
  publicUser,
  releaseReservation,
  requireRole,
} from '../../../utils/portal';

const STAFF_ROLES = ['staff', 'admin'];

function publicCustomerSession(session: any) {
  return {
    sessionId: session.id,
    status: session.status,
    checkInAt: session.checkInAt,
    masterPassActive: isMasterPassActive(session),
    masterPassExpiresAt: session.masterPassExpiresAt ?? null,
    customer: publicUser(session.customer),
    unlocked: (session.accesses ?? [])
      .filter((a: any) => a.active)
      .map((a: any) => ({ documentId: a.category?.documentId ?? null, title: a.category?.title ?? null })),
    cart: (session.reservations ?? []).map((r: any) => ({
      title: r.product?.title ?? 'Item',
      color: r.color,
      size: r.size,
      quantity: r.quantity,
    })),
    openOrders: (session.orders ?? []).length,
  };
}

function publicOrder(order: any) {
  return {
    documentId: order.documentId,
    status: order.status,
    requestedAt: order.requestedAt ?? null,
    completedAt: order.completedAt ?? null,
    totalItems: order.totalItems ?? 0,
    customer: order.customer ? publicUser(order.customer) : null,
    sessionId: typeof order.session === 'object' ? order.session?.id ?? null : order.session ?? null,
    items: order.items ?? [],
  };
}

export default ({ strapi }: { strapi: any }) => ({
  async customers(ctx: any) {
    requireRole(ctx, STAFF_ROLES);
    const sessions = await strapi.db.query('api::store-session.store-session').findMany({
      where: { status: 'checked_in' },
      populate: {
        customer: true,
        accesses: { populate: { category: true } },
        reservations: { where: { status: 'active' }, populate: { product: true } },
        orders: { where: { status: { $in: ['requested', 'picking', 'ready'] } } },
      },
      orderBy: { checkInAt: 'desc' },
    });
    return ctx.send({ customers: sessions.map(publicCustomerSession) });
  },

  async categoryCode(ctx: any) {
    requireRole(ctx, STAFF_ROLES);
    const rows = await strapi.db.query('api::category.category').findMany({ where: { documentId: ctx.params.documentId } });
    if (!rows.length) return ctx.notFound('Category not found');
    const category = rows.find((r: any) => r.publishedAt) ?? rows[0];
    const record = await getOrCreateCategoryCode(strapi, category.id);
    const base = portalBaseUrl();
    return ctx.send({
      code: record.code,
      qrToken: record.qrToken,
      version: record.version,
      qrUrl: `${base}/showroom/unlock?t=${record.qrToken}`,
      category: { documentId: category.documentId, title: category.title },
    });
  },

  async unlock(ctx: any) {
    const staffUser = requireRole(ctx, STAFF_ROLES);
    const { sessionId, categoryDocumentId } = ctx.request.body ?? {};
    if (!sessionId || !categoryDocumentId) return ctx.badRequest('sessionId and categoryDocumentId are required');
    const session = await strapi.db.query('api::store-session.store-session').findOne({ where: { id: sessionId } });
    if (!session) return ctx.notFound('Session not found');
    const rows = await strapi.db.query('api::category.category').findMany({ where: { documentId: categoryDocumentId } });
    if (!rows.length) return ctx.notFound('Category not found');
    const category = rows.find((r: any) => r.publishedAt) ?? rows[0];
    await grantAccess(strapi, session, category, 'remote', staffUser.id);
    await audit(strapi, {
      actorId: staffUser.id,
      action: 'unlock.remote',
      targetType: 'category',
      targetId: category.documentId,
      meta: { sessionId: session.id, customerId: session.customer },
    });
    return ctx.send({ ok: true });
  },

  async masterPass(ctx: any) {
    const staffUser = requireRole(ctx, STAFF_ROLES);
    const { sessionId } = ctx.request.body ?? {};
    if (!sessionId) return ctx.badRequest('sessionId is required');
    const session = await strapi.db.query('api::store-session.store-session').findOne({ where: { id: sessionId } });
    if (!session) return ctx.notFound('Session not found');
    const expiresAt = new Date(Date.now() + MASTER_PASS_HOURS * 60 * 60 * 1000).toISOString();
    const updated = await strapi.db.query('api::store-session.store-session').update({
      where: { id: session.id },
      data: { masterPassExpiresAt: expiresAt },
    });
    await audit(strapi, {
      actorId: staffUser.id,
      action: 'master_pass',
      targetType: 'store-session',
      targetId: session.documentId,
      meta: { expiresAt },
    });
    return ctx.send({ ok: true, masterPassExpiresAt: updated.masterPassExpiresAt });
  },

  async orders(ctx: any) {
    requireRole(ctx, STAFF_ROLES);
    const orders = await strapi.db.query('api::order.order').findMany({
      where: { status: { $in: ['requested', 'picking', 'ready'] } },
      populate: { customer: true, session: true, items: true },
      orderBy: { requestedAt: 'asc' },
    });
    return ctx.send({ orders: orders.map(publicOrder) });
  },

  async updateOrderStatus(ctx: any) {
    requireRole(ctx, STAFF_ROLES);
    const { status } = ctx.request.body ?? {};
    if (!['requested', 'picking', 'ready'].includes(status)) return ctx.badRequest('Invalid status');
    const order = await strapi.db.query('api::order.order').findOne({ where: { documentId: ctx.params.documentId } });
    if (!order) return ctx.notFound('Order not found');
    await strapi.db.query('api::order.order').update({ where: { id: order.id }, data: { status } });
    return ctx.send({ ok: true });
  },

  async checkout(ctx: any) {
    const staffUser = requireRole(ctx, STAFF_ROLES);
    const order = await strapi.db.query('api::order.order').findOne({
      where: { documentId: ctx.params.documentId },
      populate: { session: true, customer: true },
    });
    if (!order) return ctx.notFound('Order not found');
    const sessionId = order.session?.id;
    const now = new Date().toISOString();

    await strapi.db.transaction(async () => {
      const converted = await strapi.db.query('api::reservation.reservation').findMany({
        where: { session: sessionId, status: 'converted' },
        populate: { variant: true },
      });
      for (const r of converted) {
        if (r.variant) {
          await strapi.db.query('api::variant.variant').update({
            where: { id: r.variant.id },
            data: {
              stock: Math.max(0, (r.variant.stock || 0) - r.quantity),
              reserved: Math.max(0, (r.variant.reserved || 0) - r.quantity),
            },
          });
        }
        await strapi.db.query('api::reservation.reservation').update({ where: { id: r.id }, data: { status: 'released' } });
      }

      const active = await strapi.db.query('api::reservation.reservation').findMany({
        where: { session: sessionId, status: 'active' },
        populate: { variant: true },
      });
      for (const r of active) await releaseReservation(strapi, r, 'released');

      await strapi.db.query('api::order.order').update({
        where: { id: order.id },
        data: { status: 'completed', completedAt: now, handledBy: staffUser.id },
      });
      if (sessionId) {
        await strapi.db.query('api::store-session.store-session').update({
          where: { id: sessionId },
          data: { status: 'checked_out', checkOutAt: now, masterPassExpiresAt: null },
        });
      }
    });

    await audit(strapi, {
      actorId: staffUser.id,
      action: 'checkout',
      targetType: 'order',
      targetId: order.documentId,
      meta: { customerId: order.customer?.id, sessionId },
    });
    return ctx.send({ ok: true });
  },

  async logs(ctx: any) {
    requireRole(ctx, STAFF_ROLES);
    const logs = await strapi.db.query('api::audit-log.audit-log').findMany({
      populate: { actor: true },
      orderBy: { at: 'desc' },
      limit: 150,
    });
    return ctx.send({
      logs: logs.map((l: any) => ({
        id: l.id,
        action: l.action,
        targetType: l.targetType,
        targetId: l.targetId,
        meta: l.meta,
        at: l.at,
        actor: publicUser(l.actor),
      })),
    });
  },
});
