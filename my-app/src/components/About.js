import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <h2> "Move Fast and Build Things" </h2>
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
          <Col>
            <h3>What</h3>
            <p>
              Simply put we are developing and deploying an automated AI
              software-based platform that delivers custom integrated circuit
              designs 100X faster than legacy teams and flows. Our focus is on
              analog/mixed-signal applications which have been historically
              resistant to automation. We have achieved the 'impossible'.
            </p>
          </Col>
          <Col>
            <h3>Why</h3>
            <p>
              The chip industry has transformed the world on its way to $500B.
              But recently R&D innovation has become slow and expensive,
              limiting growth. At Celera we believe breaking down the 'R&D
              barrier' will unlock many billions of dollars in new opportunities
              for the entire ecosystem. At Celera we want to help the chip
              industry continue changing the world - only faster.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
