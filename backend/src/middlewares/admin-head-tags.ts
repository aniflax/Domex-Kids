export default (config: any, { strapi }: { strapi: any }) => {
  return async (ctx: any, next: any) => {
    await next();
    if (typeof ctx.body === 'string' && ctx.body.includes('</head>')) {
      ctx.body = ctx.body
        .replace(
          '<title>Strapi Admin</title>',
          '<title>Domex Admin</title>'
        )
        .replaceAll(' | Strapi', ' | Domex Admin')
        .replace(
          '</head>',
          '<link rel="icon" href="/favicon.png">' +
          '<link rel="apple-touch-icon" href="/apple-touch-icon.png">' +
          '<link rel="manifest" href="/manifest.json">' +
          '</head>'
        );
    }
  };
};
