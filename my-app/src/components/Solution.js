import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'

export default class About extends Component {

  render() {

    return (
      <Container>
        <h2>We Know What NOT to Do... </h2>
          <Row>
            <h2>Full Custom IC Development</h2>
            <p>Celera provides full-custom IC development initially focusing on analog/power-management applications using industry-standard silicon foundry technologies.  Realize your custom design - turnkey from spec to silicon - with our automated AI-based platform and improve your R&D productivity by 100X.  Delivering custom chips today!</p>
          </Row>
          <Row>
            <h3>Design Service</h3>
            <p>...</p>
          </Row>
          <Row>
            <h3>IP Development</h3>
            <p>...</p>
          </Row>
      </Container>
    )
  }
}