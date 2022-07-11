import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 10 },
      { id: 2, quantity: 9 },
      { id: 3, quantity: 10 },
      { id: 4, quantity: 10 },
    ],
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  handleIncrement = (product) => {
    // 1. Klona products arrayen
    const products = [...this.state.products];
    // 2. hitta indexet för producten vi ska ändra
    const index = products.indexOf(product);
    // 3. klona produkten på det indexet
    products[index] = { ...product };
    // 4. göra ändringen (increment)
    products[index].quantity++;
    // 5. setState
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleReset()} className="btn btn-primary">
          Reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </>
    );
  }
}

export default Products;
