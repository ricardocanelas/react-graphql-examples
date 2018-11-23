import React, { Component } from 'react';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';

class App extends Component {

   state = {
      products: [
         { id: '011', name: 'Macbook Air', price: '1500' },
         { id: '012', name: 'Macbook Pro 13', price: '1900' },
         { id: '013', name: 'Macbook Pro 17', price: '2300' },
         { id: '014', name: 'Apple Watch 4', price: '400' },
      ]
   };

   render() {
      return (
         <div className="container">
            <h1>Products</h1>

            <ProductForm />

            {this.state.products.map(product => (
               <ProductItem key={product.id} data={product} />
            ))}
         </div>
      );
   }
}

export default App;
