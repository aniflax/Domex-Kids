import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::video.video', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
