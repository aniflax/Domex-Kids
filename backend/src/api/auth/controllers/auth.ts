import { issueToken, publicUser, ROLE, upsertGoogleUser, verifyGoogleIdToken } from '../../../utils/portal';

export default ({ strapi }: { strapi: any }) => ({
  async google(ctx: any) {
    const { idToken, mode } = ctx.request.body ?? {};
    if (!idToken) return ctx.badRequest('idToken is required');

    let payload: any;
    try {
      payload = await verifyGoogleIdToken(idToken);
    } catch (err: any) {
      return ctx.unauthorized(err?.message || 'Invalid Google token');
    }

    const user = await upsertGoogleUser(strapi, payload, mode === 'staff' ? 'staff' : 'customer');
    if (user.blocked || user.appRole === ROLE.BLOCKED) {
      return ctx.forbidden('Your account has been blocked. Please contact the store.');
    }

    const jwt = issueToken(strapi, user.id);
    return { jwt, user: publicUser(user) };
  },

  async me(ctx: any) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized('Not authenticated');
    if (user.blocked || user.appRole === ROLE.BLOCKED) return ctx.forbidden('Account blocked');
    return { user: publicUser(user) };
  },

  async logout(ctx: any) {
    return { ok: true };
  },
});
