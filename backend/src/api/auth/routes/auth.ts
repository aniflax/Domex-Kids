export default {
  routes: [
    { method: 'POST', path: '/auth/google', handler: 'auth.google', config: { auth: false } },
    { method: 'GET', path: '/auth/me', handler: 'auth.me', config: {} },
    { method: 'POST', path: '/auth/logout', handler: 'auth.logout', config: { auth: false } },
  ],
};
