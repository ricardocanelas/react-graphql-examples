import React from 'react';

const ProductItem = ({ name, price }) => {
    return (
        <div className='product-item'>
            <div className='name'>
                {name}
            </div>
            <div className='price'>
                $ {price}
            </div>
        </div>
    )
}

export default ProductItem;