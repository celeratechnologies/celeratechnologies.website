import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'

export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(function (d) {
                    return (<li align="left">{d}</li>)
                })}
            </div>
        )
    }
}