import React, { Component } from 'react';
import logo from '../resources/celeraLogo.jpg'

export default class About extends Component {
    state = {}

    constructor() {
        super()
        this.setState({ isDataFetched: false })
    }

    componentDidMount() {
        // make call to get logo
        this.setState({isDataFetched: true})
    }
    render() {
        if (!this.state.isDataFetched) return null;
        return (
            <img src={logo} alt="Logo" />
        )
    }
}