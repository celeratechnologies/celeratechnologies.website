import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("desc:", this.props.data);
  }
  render() {
    if (this.props.current_view == "MODULEtop") return null;
    else
      return (
        <div>
          <p align="center">
            {" "}
            {this.props.data[this.props.current_view].description}{" "}
          </p>
        </div>
      );
  }
}
