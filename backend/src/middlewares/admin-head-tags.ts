export default (config: any, { strapi }: { strapi: any }) => {
  return async (ctx: any, next: any) => {
    await next();
    if (typeof ctx.body === 'string' && ctx.body.includes('</head>')) {
      ctx.body = ctx.body.replace(
        '</head>',
        '<link rel="apple-touch-icon" href="/apple-touch-icon.png">' +
        '<link rel="manifest" href="/manifest.json">' +
        '</head>'
      );
    }
  };
};
