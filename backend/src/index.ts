import type { Core } from '@strapi/strapi';

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

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensureUploadPermissions(strapi);
  },
};
