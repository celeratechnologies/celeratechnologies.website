import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
export default class List extends Component {
    render() {
        if (this.props.current_view == "MODULEtop") return null
        else return (
            <NavDropdown title="Go to simulation" id="basic-nav-dropdown">
                {this.props.data[this.props.current_view].simulations.map((d) => {
                    return (<Link to={`/product/${this.props.chip_name}/${this.props.current_view}/simulation/${d}`} className="nav-link"
                        onClick={() => this.setState({ path: d })}>{d}</Link>)
                })}
            </NavDropdown>
        )
    }
}

