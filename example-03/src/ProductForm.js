import React from "react";

import environment from './environment';
import { CREATE_PRODUCT_commit } from "./graphql/mutation";

class ProductItem extends React.Component {

  handleClick = () => {
    const variables = {
      name: 'AnotherRelay',
      price: '359',
    }
    CREATE_PRODUCT_commit(environment, variables, (response, errors) => {
      console.log('onCompleted: Create a product');
      console.log(response);
      console.log(errors);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Testing</button>
      </div>
    );
  }
}

export default ProductItem;
