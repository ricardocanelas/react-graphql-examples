import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_PRODUCT } from "./graphql/mutation";

class ProductItem extends React.Component {
  state = {
    form: { name: "Anything", price: "100" }
  };

  handleChange = prop => e => {
    const value = e.target.value;
    this.setState(prev => {
      return {
        form: {
          ...prev.form,
          [prop]: value
        }
      };
    });
  };

  render() {
    const { form } = this.state;
    return (
      <div>
        <Mutation mutation={CREATE_PRODUCT} variables={this.state.form}>
          {createProduct => (
            <form>
              <div className="field name">
                <label>Name</label>
                <input value={form.name} onChange={this.handleChange("name")} />
              </div>

              <div className="field price">
                <label>Price</label>
                <input
                  value={form.price}
                  onChange={this.handleChange("price")}
                />
              </div>

              <button
                onClick={e => {
                  e.preventDefault();
                  createProduct();
                }}
              >
                Add
              </button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default ProductItem;
