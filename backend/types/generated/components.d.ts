import type { Schema, Struct } from '@strapi/strapi';

export interface SharedOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_order_items';
  info: {
    description: 'A line item on a pick-list ticket';
    displayName: 'Order Item';
  };
  attributes: {
    color: Schema.Attribute.String;
    productDocumentId: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    size: Schema.Attribute.String;
    sku: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variantDocumentId: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.order-item': SharedOrderItem;
    }
  }
}
