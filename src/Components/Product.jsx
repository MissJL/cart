import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, product } = this.props;

    return (
      <div className="container m-2">
        <span className="row">
          <span className="col-sm-1">
            {" "}
            <span className={this.getBadgeClasses()}>
              {this.formatQuantity()}
            </span>
          </span>
          <span className="col">
            <button
              onClick={() => onIncrement(product)}
              className="btn btn-secondary"
            >
              +
            </button>

            <button
              onClick={() => onDecrement(product)}
              className="btn btn-secondary ms-2"
            >
              -
            </button>

            <button
              onClick={() => onDelete(product.id)}
              className="btn btn-danger ms-2"
            >
              X
            </button>
          </span>
        </span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "zero" : this.props.product.quantity;
  }
}

export default Product;
