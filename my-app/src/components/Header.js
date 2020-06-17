import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../resources/celeraLogo.jpg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {};
  constructor(props) {
    super(props);

    // replace this with AJAX call to backend
    let data = {
      products: ["Tokyo", "JUNO", "Yokahama", "Yokosuka"],
    };
    this.state.products = data.products;
  }
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="/celeratechnologies.website">
          <img
            src={logo}
            width="80"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              {this.state.products.map(function (d) {
                return (
                  <Link to={`/product/${d}/`} className="nav-link">
                    {d}
                  </Link>
                );
              })}
            </NavDropdown>
            <Link to="/updates" className="nav-link">
              Release Updates
            </Link>
          </Nav>
          <Nav>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
