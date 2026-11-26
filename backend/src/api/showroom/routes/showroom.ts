export default {
  routes: [
    { method: 'POST', path: '/showroom/check-in', handler: 'showroom.checkIn', config: {} },
    { method: 'GET', path: '/showroom/home', handler: 'showroom.home', config: {} },
    { method: 'GET', path: '/showroom/category/:documentId', handler: 'showroom.category', config: {} },
    { method: 'POST', path: '/showroom/unlock/code', handler: 'showroom.unlockCode', config: {} },
    { method: 'POST', path: '/showroom/unlock/scan', handler: 'showroom.unlockScan', config: {} },
    { method: 'GET', path: '/showroom/cart', handler: 'showroom.getCart', config: {} },
    { method: 'POST', path: '/showroom/cart', handler: 'showroom.addToCart', config: {} },
    { method: 'PATCH', path: '/showroom/cart/:id', handler: 'showroom.updateCart', config: {} },
    { method: 'DELETE', path: '/showroom/cart/:id', handler: 'showroom.removeCart', config: {} },
    { method: 'POST', path: '/showroom/request', handler: 'showroom.request', config: {} },
  ],
};
