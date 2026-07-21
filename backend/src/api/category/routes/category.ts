import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::category.category', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
