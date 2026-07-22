import { factories } from '@strapi/strapi';

/**
 * Strapi keeps draft and published entries separately. In some existing
 * product records, publishing does not copy the category relation even though
 * it is present on the draft. The storefront must never receive an
 * uncategorised published product in that case.
 */
export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const response = await super.find(ctx);
    const draftProducts = await strapi.documents('api::product.product').findMany({
      status: 'draft',
      populate: {
        category: {
          fields: ['documentId', 'title', 'publishedAt'],
        },
      },
    });

    const categoriesByProductDocumentId = new Map(
      draftProducts
        .filter((product) => product.category)
        .map((product) => [product.documentId, product.category]),
    );

    for (const product of response.data) {
      if (!product.category) {
        product.category = categoriesByProductDocumentId.get(product.documentId) ?? null;
      }
    }

    return response;
  },
}));
