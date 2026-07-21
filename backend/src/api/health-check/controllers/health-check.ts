import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async index(ctx: any) {
    ctx.body = 'ok';
  },
});

export default controller;
