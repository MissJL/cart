import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light col-3">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            Navbar
            <span className="badge rounded-pill bg-success mx-2">
              {this.props.productCount}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
