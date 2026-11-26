import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::subcategory.subcategory', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
