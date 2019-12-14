import React, { Component } from 'react';

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