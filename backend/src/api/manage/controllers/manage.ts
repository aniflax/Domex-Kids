import { audit, publicUser, releaseReservation, requireRole } from '../../../utils/portal';

const ALLOWED_ROLES = ['customer', 'pending_staff', 'staff', 'admin', 'blocked'];

export default ({ strapi }: { strapi: any }) => ({
  async users(ctx: any) {
    requireRole(ctx, ['admin']);
    const users = await strapi.db.query('plugin::users-permissions.user').findMany({
      orderBy: { createdAt: 'desc' },
      limit: 500,
    });
    return ctx.send({
      users: users.map((u: any) => ({ ...publicUser(u), blocked: u.blocked, createdAt: u.createdAt })),
    });
  },

  async setRole(ctx: any) {
    const adminUser = requireRole(ctx, ['admin']);
    const { appRole } = ctx.request.body ?? {};
    if (!ALLOWED_ROLES.includes(appRole)) return ctx.badRequest('Invalid role');
    const id = Number(ctx.params.id);
    const user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { id } });
    if (!user) return ctx.notFound('User not found');
    const updated = await strapi.db.query('plugin::users-permissions.user').update({
      where: { id },
      data: { appRole, blocked: appRole === 'blocked' },
    });
    await audit(strapi, {
      actorId: adminUser.id,
      action: 'user.set_role',
      targetType: 'user',
      targetId: String(id),
      meta: { appRole, email: user.email },
    });
    return ctx.send({ user: { ...publicUser(updated), blocked: updated.blocked } });
  },

  async inventory(ctx: any) {
    requireRole(ctx, ['admin']);
    const catRows = await strapi.db.query('api::category.category').findMany({});
    const docs = new Map<string, any>();
    for (const r of catRows) {
      if (!docs.has(r.documentId)) docs.set(r.documentId, { documentId: r.documentId, title: r.title, ids: [], published: false });
      const entry = docs.get(r.documentId);
      entry.ids.push(r.id);
      if (r.publishedAt) entry.published = true;
    }
    const result: any[] = [];
    for (const entry of docs.values()) {
      if (!entry.published) continue;
      const products = await strapi.db.query('api::product.product').findMany({
        where: { category: { $in: entry.ids }, publishedAt: { $notNull: true } },
        populate: { variants: true },
      });
      let totalStock = 0;
      let totalReserved = 0;
      for (const p of products) {
        for (const v of p.variants ?? []) {
          totalStock += v.stock ?? 0;
          totalReserved += v.reserved ?? 0;
        }
      }
      result.push({
        documentId: entry.documentId,
        title: entry.title,
        productCount: products.length,
        totalStock,
        totalReserved,
        available: Math.max(0, totalStock - totalReserved),
      });
    }
    result.sort((a, b) => String(a.title).localeCompare(String(b.title)));
    return ctx.send({ categories: result });
  },

  async clearSession(ctx: any) {
    const adminUser = requireRole(ctx, ['admin']);
    const id = Number(ctx.params.id);
    const session = await strapi.db.query('api::store-session.store-session').findOne({ where: { id } });
    if (!session) return ctx.notFound('Session not found');
    const reservations = await strapi.db.query('api::reservation.reservation').findMany({
      where: { session: id, status: { $in: ['active', 'converted'] } },
      populate: { variant: true },
    });
    for (const r of reservations) await releaseReservation(strapi, r, 'released');
    await strapi.db.query('api::store-session.store-session').update({
      where: { id },
      data: { status: 'checked_out', checkOutAt: new Date().toISOString(), masterPassExpiresAt: null },
    });
    await audit(strapi, {
      actorId: adminUser.id,
      action: 'session.clear',
      targetType: 'store-session',
      targetId: session.documentId,
    });
    return ctx.send({ ok: true });
  },

  async logs(ctx: any) {
    requireRole(ctx, ['admin']);
    const logs = await strapi.db.query('api::audit-log.audit-log').findMany({
      populate: { actor: true },
      orderBy: { at: 'desc' },
      limit: 300,
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
