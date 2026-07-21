export default [
  {
    method: 'GET',
    path: '/health',
    handler: 'health-check.index',
    config: {
      auth: false,
    },
  },
];
