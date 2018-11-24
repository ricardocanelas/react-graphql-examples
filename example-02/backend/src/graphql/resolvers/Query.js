import mongoose from 'mongoose'
import Product from '../../models/Product'

export default {
    product: async id => {
        return await Product.findOne(id)
    },

    products: async () => {
        return await Product.find({})
            .sort({ _id: -1 }) // desc
            .exec()
    },

    productsPagination: async (_, { cursor, limit = 100 }) => {
        const cursorOptions = cursor ? { _id: { $gt: mongoose.Types.ObjectId(cursor) } } : {}
        const results = await Product.find(cursorOptions)
            .sort({ _id: -1 }) // desc
            .limit(limit + 1)
            .exec()

        let hasNextPage = results.length > limit
        let endCursor = results[results.length - 1].id

        return {
            totalCount: await Product.countDocuments({}),
            edges: hasNextPage ? results.slice(0, -1) : results,
            pageInfo: {
                hasNextPage,
                endCursor,
            },
        }
    },
}
