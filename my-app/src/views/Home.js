import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import DA6102 from '../resources/da6102.jpg'

export default class Home extends Component {
  state = {
    name: "DA6102",
    short_description: "Highly integrated, compact PMIC",
    long_description: "The DA6102 is a highly integrated multi-channel PMIC designed for 2-cell lithium-ion battery powered systems. The wide input voltage range allows direct battery connection for each channel to maximize battery life. The PMIC also includes a highly accurate input current sense with circuit breaker control for battery current sensing and over-current shutdown. The DA6102 integrates two buck regulators, a BuckBoost regulator, a high current buck controller, and two always-on LDOs. This high level of integration combined with high frequency operation (up to 3 MHz) minimizes both PCB size and external component count for the smallest possible solution size. The DA6102 uses extremely low RDSon FETs to enable very high efficiency buck and BuckBoost regulation.",
    features: ["4.5 V to 11.5 V input range",
      "Input current sense with circuit breaker",
      "± 1 % monitoring accuracy",
      "Programmable internal switching frequency"],
    benefits: ["High efficiency",
      "Wide input voltage range",
      "Highly programmable start-up sequencing and protection features on each channel",
      "High accuracy ± 1 % input current sense monitoring",
      "High frequency operation – low-profile components"],
    applications: ["DSLR cameras",
      "MILC cameras",
      "Handheld point-of-sale terminals",
      "2-cell battery applications"]
  }

  render() {
    return (
      <Container>
        <h1> {this.state.name} </h1>
        <Row>
          <Col>
            <h2> {this.state.short_description} </h2>
            <p align="left"> {this.state.long_description} </p>
          </Col>
          <Col>
            <img src={DA6102} alt="Logo" />;
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> Features </h2>
            {this.state.features.map(function (d) {
              return (<li align="left">{d}</li>)
            })}
          </Col>
          <Col>
            <h2> Benefits </h2>
            {this.state.benefits.map(function (d) {
              return (<li align="left">{d}</li>)
            })}
          </Col>
          <Col>
            <h2> Applications </h2>
            {this.state.applications.map(function (d) {
              return (<li align="left">{d}</li>)
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}