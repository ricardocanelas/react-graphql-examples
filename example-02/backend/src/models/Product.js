import mongoose from 'mongoose'

// ------
// Schema
// ------

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
})

// -------------
// Virtual Types
// -------------

ProductSchema.virtual('id').get(function() {
    return this.toJSON()._id.toString()
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
