export default {
  routes: [
    { method: 'GET', path: '/staff/customers', handler: 'staff.customers', config: {} },
    { method: 'GET', path: '/staff/access/:documentId/code', handler: 'staff.categoryCode', config: {} },
    { method: 'POST', path: '/staff/unlock', handler: 'staff.unlock', config: {} },
    { method: 'POST', path: '/staff/master-pass', handler: 'staff.masterPass', config: {} },
    { method: 'GET', path: '/staff/orders', handler: 'staff.orders', config: {} },
    { method: 'POST', path: '/staff/orders/:documentId/status', handler: 'staff.updateOrderStatus', config: {} },
    { method: 'POST', path: '/staff/orders/:documentId/checkout', handler: 'staff.checkout', config: {} },
    { method: 'GET', path: '/staff/logs', handler: 'staff.logs', config: {} },
  ],
};
