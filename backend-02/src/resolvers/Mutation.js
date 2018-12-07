import Product from '../models/Product'
import { PUBSUB_PRODUCT_CREATED } from './Subscription'

export default {
    createProduct: async (_, params, context) => {
        const result = await Product.create(params)
            .then(doc => doc)
            .catch(err => err)

        context.pubsub.publish(PUBSUB_PRODUCT_CREATED, { productCreated: { message: result } })
        return result
    },

    updateProduct: async (_, params) => {
        return await Product.findOneAndUpdate({ _id: params.id }, params, { new: true })
            .then(doc => doc)
            .catch(err => err)
    },

    deleteProduct: async (_, params) => {
        return await Product.findOneAndRemove({ _id: params.id })
            .then(doc => doc)
            .catch(err => err)
    },
}
