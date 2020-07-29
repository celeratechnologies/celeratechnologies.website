import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((d) => {
          return <li key = {d.toString()} align="left">{d}</li>;
        })}
      </div>
    );
  }
}
