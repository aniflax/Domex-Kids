import { randomUUID } from 'node:crypto';
import { OAuth2Client } from 'google-auth-library';

export const ROLE = {
  CUSTOMER: 'customer',
  PENDING_STAFF: 'pending_staff',
  STAFF: 'staff',
  ADMIN: 'admin',
  BLOCKED: 'blocked',
} as const;

export const RESERVATION_MINUTES = 45;
export const MASTER_PASS_HOURS = 2;

const googleClient = new OAuth2Client();

export function requireAuth(ctx: any) {
  const user = ctx.state?.user;
  if (!user) ctx.throw(401, 'Authentication required');
  if (user.blocked || user.appRole === ROLE.BLOCKED) ctx.throw(403, 'Your account has been blocked');
  return user;
}

export function requireRole(ctx: any, roles: string[]) {
  const user = requireAuth(ctx);
  if (!roles.includes(user.appRole)) {
    ctx.throw(403, 'You do not have access to this resource');
  }
  return user;
}

export async function verifyGoogleIdToken(idToken: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) throw new Error('GOOGLE_CLIENT_ID is not configured on the server');
  const ticket = await googleClient.verifyIdToken({ idToken, audience: clientId });
  const payload = ticket.getPayload();
  if (!payload?.email) throw new Error('Google token did not contain an email address');
  if (!payload.email_verified) throw new Error('Your Google email is not verified');
  return payload;
}

export function publicUser(user: any) {
  if (!user) return null;
  return {
    id: user.id,
    documentId: user.documentId,
    email: user.email,
    username: user.username,
    fullName: user.fullName ?? null,
    picture: user.picture ?? null,
    appRole: user.appRole,
  };
}

export function issueToken(strapi: any, userId: number | string) {
  return strapi.service('plugin::users-permissions.jwt').issue({ id: userId });
}

async function uniqueUsername(strapi: any, email: string) {
  const raw = (email.split('@')[0] || 'user').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 24) || 'user';
  const base = raw.length >= 3 ? raw : `${raw}user`;
  let candidate = base;
  let n = 1;
  while (await strapi.db.query('plugin::users-permissions.user').findOne({ where: { username: candidate } })) {
    candidate = `${base}${n++}`;
  }
  return candidate;
}

export async function upsertGoogleUser(strapi: any, payload: any, mode: 'customer' | 'staff' = 'customer') {
  const email = String(payload.email).toLowerCase();
  const adminEmail = (process.env.ADMIN_GOOGLE_EMAIL || '').toLowerCase();
  const isAdmin = Boolean(adminEmail) && email === adminEmail;
  const existing = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email } });

  if (!existing) {
    const authenticatedRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'authenticated' } });
    return strapi.db.query('plugin::users-permissions.user').create({
      data: {
        username: await uniqueUsername(strapi, email),
        email,
        provider: 'google',
        confirmed: true,
        blocked: false,
        appRole: isAdmin ? ROLE.ADMIN : mode === 'staff' ? ROLE.PENDING_STAFF : ROLE.CUSTOMER,
        fullName: payload.name ?? null,
        picture: payload.picture ?? null,
        role: authenticatedRole?.id,
      },
    });
  }

  const patch: any = {};
  if (payload.name && existing.fullName !== payload.name) patch.fullName = payload.name;
  if (payload.picture && existing.picture !== payload.picture) patch.picture = payload.picture;
  if (existing.provider !== 'google') patch.provider = 'google';
  if (isAdmin && existing.appRole !== ROLE.ADMIN) patch.appRole = ROLE.ADMIN;
  if (!isAdmin && mode === 'staff' && existing.appRole === ROLE.CUSTOMER) patch.appRole = ROLE.PENDING_STAFF;
  if (Object.keys(patch).length === 0) return existing;
  return strapi.db.query('plugin::users-permissions.user').update({ where: { id: existing.id }, data: patch });
}

export function generateCode() {
  return String(Math.floor(Math.random() * 10000)).padStart(4, '0');
}

export function generateToken() {
  return randomUUID().replace(/-/g, '');
}

export async function getActiveSession(strapi: any, userId: number | string, opts: { create?: boolean } = {}) {
  let session = await strapi.db.query('api::store-session.store-session').findOne({
    where: { customer: userId, status: 'checked_in' },
    orderBy: { checkInAt: 'desc' },
  });
  if (!session && opts.create) {
    session = await strapi.db.query('api::store-session.store-session').create({
      data: { customer: userId, status: 'checked_in', checkInAt: new Date().toISOString() },
    });
  }
  return session;
}

export function isMasterPassActive(session: any) {
  return Boolean(session?.masterPassExpiresAt) && new Date(session.masterPassExpiresAt) > new Date();
}

export function portalBaseUrl() {
  const raw = process.env.FRONTEND_URL || (process.env.CORS_ORIGIN || '').split(',')[0] || '';
  return raw.replace(/\/+$/, '');
}

export async function audit(
  strapi: any,
  entry: { actorId?: number; action: string; targetType?: string; targetId?: string; meta?: any },
) {
  try {
    await strapi.db.query('api::audit-log.audit-log').create({
      data: {
        actor: entry.actorId,
        action: entry.action,
        targetType: entry.targetType,
        targetId: entry.targetId,
        meta: entry.meta ?? null,
        at: new Date().toISOString(),
      },
    });
  } catch (err) {
    strapi.log.warn(`audit log failed: ${err}`);
  }
}

export async function releaseReservation(strapi: any, reservation: any, status: 'expired' | 'released') {
  const variantId = typeof reservation.variant === 'object' ? reservation.variant?.id : reservation.variant;
  if (variantId) {
    const variant = await strapi.db.query('api::variant.variant').findOne({ where: { id: variantId } });
    if (variant) {
      await strapi.db.query('api::variant.variant').update({
        where: { id: variant.id },
        data: { reserved: Math.max(0, (variant.reserved || 0) - (reservation.quantity || 0)) },
      });
    }
  }
  await strapi.db.query('api::reservation.reservation').update({ where: { id: reservation.id }, data: { status } });
}

export async function expireStaleReservations(strapi: any) {
  const now = new Date().toISOString();
  const stale = await strapi.db.query('api::reservation.reservation').findMany({
    where: { status: 'active', expiresAt: { $lt: now } },
    populate: { variant: true },
  });
  for (const r of stale) await releaseReservation(strapi, r, 'expired');
  return stale.length;
}

export async function grantAccess(strapi: any, session: any, category: any, method: string, grantedById?: number) {
  const existing = await strapi.db.query('api::category-access.category-access').findOne({
    where: { session: session.id, category: category.id, active: true },
  });
  if (existing) return existing;
  return strapi.db.query('api::category-access.category-access').create({
    data: {
      session: session.id,
      category: category.id,
      method,
      grantedBy: grantedById,
      grantedAt: new Date().toISOString(),
      expiresAt: null,
      active: true,
    },
  });
}

export async function getOrCreateCategoryCode(strapi: any, categoryId: number) {
  let record = await strapi.db.query('api::category-code.category-code').findOne({ where: { category: categoryId } });
  if (!record) {
    record = await strapi.db.query('api::category-code.category-code').create({
      data: {
        category: categoryId,
        code: generateCode(),
        qrToken: generateToken(),
        version: 1,
        generatedAt: new Date().toISOString(),
      },
    });
  }
  return record;
}

export async function regenerateCategoryCode(strapi: any, record: any) {
  return strapi.db.query('api::category-code.category-code').update({
    where: { id: record.id },
    data: {
      code: generateCode(),
      qrToken: generateToken(),
      version: (record.version || 1) + 1,
      generatedAt: new Date().toISOString(),
    },
  });
}
