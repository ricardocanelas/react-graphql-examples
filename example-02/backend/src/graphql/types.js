export const productType = `
    type Product {
    _id: String
    name: String
    description: String
    image: String
    price: Float
  }
  type Query {
    product(_id: String): Product
    products: [Product]
  }`
