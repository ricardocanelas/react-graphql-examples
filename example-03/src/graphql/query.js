import graphql from 'babel-plugin-relay/macro';

// Note that the name of the query must be <FileName>Query.
// So query AppQuery { ... } will only work if the query is in a file named App.js.
// So query ProductListQuery { ... } will only work if the query is in a file named ProductListQuery.js.
// So on...
export const GET_PRODUCTS = graphql`
    query queryQuery{
        products {
            id
            name
            price
        }
    }
`