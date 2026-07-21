import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::product.product', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
