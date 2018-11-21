import Product from '../../models/Product'

export default {
    product: async id => {
        return await Product.findOne(id)
    },
    products: async () => {
        return await Product.find({})
    },
}
