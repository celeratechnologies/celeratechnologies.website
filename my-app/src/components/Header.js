import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../resources/celeraLogo.jpg'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    state = {}
    constructor(props) {
        super(props)
        let data = {
            products: ["DA6102", "DA6103", "DA6104"]
        }
        this.state.products = data.products

    }
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="80"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {/* {'Celera'} */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to="/about" className="nav-link">About Us</Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            {this.state.products.map(function (d) {
                                return (<Link to={`product/${d}/`} className="nav-link">{d}</Link>)
                            })}
                        </NavDropdown>
                        <Link to="/news" className="nav-link">News</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}