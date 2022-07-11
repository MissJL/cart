import React, { Component } from "react";

class Product extends Component {
  state = {
    tags: [
      { id: 1, quantity: 5 },
      { id: 2, quantity: 5 },
      { id: 3, quantity: 0 },
      { id: 4, quantity: 5 },
    ],
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.tags.quantity + 1 });
  };

  handleDecrement = () => {
    this.setState({ quantity: this.state.tags.quantity - 1 });
  };

  handleDelete = (id) => {
    const tags = this.state.tags.filter((tag) => tag.id !== id);
    this.setState({ tags });
  };

  handleReset = () => {};

  render() {
    return (
      <div className="container">
        <button onClick={() => this.handleReset()} className="btn btn-primary">
          Reset
        </button>
        {this.state.tags.map((tag) => (
          <div key={tag}>
            <span className={this.getBadgeClasses()}>
              {this.formatQuantity()}
              {tag.quantity}
            </span>
            <button
              onClick={() => this.handleIncrement(tag.quantity)}
              className="btn btn-secondary"
            >
              +
            </button>
            <button
              onClick={() => this.handleDecrement(tag.quantity)}
              className="btn btn-secondary"
            >
              -
            </button>
            <button
              onClick={() => this.handleDelete(tag.id)}
              className="btn btn-danger"
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes += this.state.tags.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.state;
    return quantity === 0 ? "zero" : this.state.tags.quantity;
  }
}

export default Product;
