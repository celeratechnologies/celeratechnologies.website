import React, { Component } from "react";

export default class List extends Component {
  render() {
    if (this.props.current_view === "MODULEtop") return null;
    else
      return (
        <div>
          <p align="center">
            {" "}
            {this.props.data.description}{" "}
          </p>
        </div>
      );
  }
}
