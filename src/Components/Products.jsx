import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const {
      onReset,
      onDecrement,
      onIncrement,
      onDelete,
      products,
    } = this.props;
    return (
      <>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </>
    );
  }
}

export default Products;
