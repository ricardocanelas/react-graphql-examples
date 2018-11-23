import gql from 'graphql-tag'

export const CREATE_PRODUCT = gql`
    mutation($name:String!, $price: String) {
        createProduct(name: $name price: $price) {
            id
        }
    }
`