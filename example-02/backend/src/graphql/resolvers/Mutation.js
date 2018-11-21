import Product from '../../models/Product'

export default {
    createProduct: async (_, params) => {
        return await Product.create(params)
            .then(doc => doc)
            .catch(err => err)
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
