import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';

import ProductForm from './ProductForm';
import ProductList from './ProductList';

import environment from './environment';
import { GET_PRODUCTS } from './graphql/query'

import './style.css'

class App extends Component {
  render() {
    return (
      <div className="container">

        <h1>Products</h1>

        <ProductForm />

        <QueryRenderer
          environment={environment}
          query={GET_PRODUCTS}
          variables={{}}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }

            if (!props) {
              return <div>Loading...</div>;
            }

            return (
              <ProductList
                 products={props.products} />
           )
          }}
        />

      </div>
    );
  }
}

export default App;
