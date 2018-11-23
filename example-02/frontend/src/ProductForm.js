import React from 'react';

const ProductItem = () => {
    return (
        <div>
            <form>
               <div className="field name">
                  <label>Name</label>
                  <input /><br/>
               </div>

               <div className="field price">
                  <label>Price</label>
                  <input /><br/>
                  </div>

               <button>Add</button>
            </form>
        </div>
    )
}

export default ProductItem;