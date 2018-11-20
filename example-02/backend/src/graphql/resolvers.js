import Product from '../models/Product'

export const productResolver = {
    Query: {
        product: async _id => {
            return await Product.findOne(_id)
        },
        products: async () => {
            return await Product.find({})
        },
    },
}
