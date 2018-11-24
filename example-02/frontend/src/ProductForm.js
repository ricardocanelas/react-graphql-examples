import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_PRODUCT } from "./graphql/mutation";

const isValid = (data) => {
  let result = true
  if (data.name.trim() === '' ||
    data.price.trim() === '') {
    result = false;
    alert("The name and price fields are require.");
  } else {
    if (isNaN(data.price)) {
      result = false;
      alert("The price field has to be a number.");
    }
  }

  return result;
}

class ProductItem extends React.Component {
  state = {
    form: { name: "Anything", price: "100" },
    sending: false,
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
                  if (this.state.sending) return;

                  if (isValid(this.state.form)) {
                    this.setState({ sending: true })
                    createProduct();
                    this.setState({
                      form: { name: '', price: '' },
                      sending: false
                    });
                  }

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
