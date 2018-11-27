export const PUBSUB_PRODUCT_CREATED = 'PUBSUB_PRODUCT_CREATED'

export default {
    productCreated: {
        subscribe: (_, __, { pubsub }) => {
            return pubsub.asyncIterator(PUBSUB_PRODUCT_CREATED)
        },
    },
}
