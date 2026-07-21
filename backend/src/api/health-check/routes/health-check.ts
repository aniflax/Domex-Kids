export default [
  {
    method: 'GET',
    path: '/health',
    handler: (ctx: any) => {
      ctx.body = 'ok';
    },
    config: {
      auth: false,
    },
  },
];
