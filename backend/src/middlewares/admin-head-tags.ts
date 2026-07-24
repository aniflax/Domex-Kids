export default (config: any, { strapi }: { strapi: any }) => {
  return {
    initialize() {
      strapi.server.use((ctx: any, next: any) => {
        return next().then(() => {
          if (typeof ctx.body === 'string' && ctx.body.includes('</head>')) {
            ctx.body = ctx.body.replace(
              '</head>',
              '<link rel="apple-touch-icon" href="/apple-touch-icon.png">' +
              '<link rel="manifest" href="/manifest.json">' +
              '</head>'
            );
          }
        });
      });
    },
  };
};
