import React, { Component } from 'react';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';

import { Query } from 'react-apollo';
import { GET_PRODUCTS } from './graphql/query';

import "./style.css";

class App extends Component {


   render() {
      return (
         <div className="container">

            <h1>Products</h1>

            <ProductForm />

            <Query query={GET_PRODUCTS}>
               {({ data, loading, error }) => {

                  if (error) {
                     return (<div>Error</div>)
                  }

                  const products = data.products;

                  if (loading && !products) {
                     return (<div>Loading...</div>)
                  }

                  return (
                     <div>
                        {products.map(product => (
                           <ProductItem key={product.id} data={product} />
                        ))}
                     </div>
                  )
               }}
            </Query>
         </div>
      );
   }
}

export default App;
