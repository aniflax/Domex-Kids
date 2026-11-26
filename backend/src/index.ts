import type { Core } from '@strapi/strapi';
import { expireStaleReservations } from './utils/portal';

/**
 * Actions the admin panel needs to read and select existing media from the
 * Media Library when creating / editing content entries.
 */
const UPLOAD_ACTIONS = [
  { action: 'plugin::upload.read', subject: 'plugin::upload.file' },
  { action: 'plugin::upload.assets.create', subject: 'plugin::upload.file' },
  { action: 'plugin::upload.assets.update', subject: 'plugin::upload.file' },
  { action: 'plugin::upload.assets.download', subject: 'plugin::upload.file' },
  { action: 'plugin::upload.assets.copy-link', subject: 'plugin::upload.file' },
  { action: 'plugin::upload.configure-view', subject: 'plugin::upload.file' },
];

async function ensureUploadPermissions(strapi: Core.Strapi) {
  const roles = await strapi.service('admin::role').find();
  const rolesList = Array.isArray(roles) ? roles : roles.results ?? [];
  for (const role of rolesList) {
    const existing = await strapi.service('admin::permission').findMany({
      where: {
        role: role.id,
        action: { $in: UPLOAD_ACTIONS.map((a) => a.action) },
      },
    });
    const existingActions = new Set(existing.map((p: any) => p.action));
    const missing = UPLOAD_ACTIONS.filter((a) => !existingActions.has(a.action));
    if (missing.length) {
      await strapi.service('admin::permission').createMany({
        data: missing.map((a) => ({ ...a, role: role.id })),
      });
    }
  }
}

/**
 * Custom portal routes (auth / showroom / staff / manage) are gated by the
 * `authenticated` users-permissions role; the real role checks (customer /
 * staff / admin) happen inside the controllers. Grant the route scopes to the
 * authenticated role so any logged-in user can reach them.
 */
const PORTAL_ROUTE_GROUPS: Array<[string, string, string[]]> = [
  ['auth', 'auth', ['me']],
  [
    'showroom',
    'showroom',
    ['checkIn', 'home', 'category', 'unlockCode', 'unlockScan', 'getCart', 'addToCart', 'updateCart', 'removeCart', 'request'],
  ],
  [
    'staff',
    'staff',
    ['customers', 'categoryCode', 'unlock', 'masterPass', 'orders', 'updateOrderStatus', 'checkout', 'logs'],
  ],
  ['manage', 'manage', ['users', 'setRole', 'inventory', 'clearSession', 'logs']],
];

async function ensurePortalPermissions(strapi: Core.Strapi) {
  const role = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'authenticated' } });
  if (!role) return;
  const actions = PORTAL_ROUTE_GROUPS.flatMap(([api, controller, methods]) =>
    methods.map((method) => `api::${api}.${controller}.${method}`),
  );
  const existing = await strapi.db
    .query('plugin::users-permissions.permission')
    .findMany({ where: { role: role.id, action: { $in: actions } } });
  const have = new Set(existing.map((p: any) => p.action));
  for (const action of actions.filter((a) => !have.has(a))) {
    await strapi.db.query('plugin::users-permissions.permission').create({ data: { action, role: role.id } });
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensureUploadPermissions(strapi);
    await ensurePortalPermissions(strapi);

    strapi.cron.add({
      'expire-reservations': {
        task: async () => {
          const released = await expireStaleReservations(strapi);
          if (released) strapi.log.info(`[showroom] released ${released} expired reservation(s)`);
        },
        options: { rule: '* * * * *' },
      },
    });
  },
};
