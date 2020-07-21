import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <h2>Contact us</h2>
        <Row>
          <Col>
            <h3>Who</h3>
            <p>
              We are a team of accomplished technology professionals with deep
              experience in semiconductors, software, systems, development
              tools. A common desire to re-think and re-build methods of
              semiconductor R&D brought us together. We are driven by a passion
              to transform our own industry.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
