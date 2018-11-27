import React from 'react';
import ProductItem from './ProductItem';

import { SUBSCRIPTION_PRODUCT_CREATED } from './graphql/subscription';

class ProductList extends React.Component {
    componentDidMount() {
        // Subscription: When have a new product
        this.props.subscribeToMore({
            document: SUBSCRIPTION_PRODUCT_CREATED,
            updateQuery: (prev, { subscriptionData }) => {
               if (!subscriptionData.data ||
                  !subscriptionData.data.productCreated) {
                  return prev;
               }

               const newProduct = subscriptionData.data.productCreated;

               return {
                  ...prev,
                  products: [
                     newProduct.message,
                     ...prev.products,
                  ]
               }
            }
         })
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                {products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        )
    }
}

export default ProductList;