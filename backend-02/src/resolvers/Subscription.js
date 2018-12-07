export const PUBSUB_PRODUCT_CREATED = 'PUBSUB_PRODUCT_CREATED'

export default {
    productCreated: {
        subscribe: (_, __, context) => {
            return context.pubsub.asyncIterator(PUBSUB_PRODUCT_CREATED)
        },
    },
}
