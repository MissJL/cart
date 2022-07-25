import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand h1" style={{ fontSize: 30 }}>
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
