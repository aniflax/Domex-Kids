export default {
  routes: [
    { method: 'GET', path: '/admin/users', handler: 'manage.users', config: {} },
    { method: 'POST', path: '/admin/users/:id/role', handler: 'manage.setRole', config: {} },
    { method: 'GET', path: '/admin/inventory', handler: 'manage.inventory', config: {} },
    { method: 'POST', path: '/admin/sessions/:id/clear', handler: 'manage.clearSession', config: {} },
    { method: 'GET', path: '/admin/logs', handler: 'manage.logs', config: {} },
  ],
};
