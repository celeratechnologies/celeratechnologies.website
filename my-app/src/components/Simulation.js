import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Container } from "react-bootstrap";
import PDF from "./PDF";
import DownloadButton from "./DownloadButton";

export default class Simulation extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setState({
      isDataFetched: false,
      count: 0,
    });
  }

  componentDidMount() {
    fetch(
      `${this.props.match.params.name}/${this.props.match.params.name}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          chip_image: data.chip_image,
          short_description: data.short_description,
          long_description: data.long_description,
          features: data.features,
          applications: data.applications,
          components: data.components,
          chip_name: this.props.match.params.name,
          path: null,
          isDataFetched: true,
          sections: data.sections,
        });
        if (this.props.match.params.view !== undefined) {
          this.setState({ current_view: this.props.match.params.view });
        } else {
          this.setState({ current_view: "MODULEtop" });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.name !== this.props.match.params.name ||
      prevProps.match.params.view !== this.props.match.params.view
    ) {
      this.forceUpdate();
      this.setState({
        name: this.props.match.params.name,
        view: this.props.match.params.view,
      });
    }
  }

  render() {
    if (!this.state.isDataFetched) return null;
    return (
      <Container>
        <h1> {this.state.chip_name} Simulation </h1>
        <Row>
          <Col>
            <Nav title="Return to viewer">
              <Link
                to={`/product/${this.state.chip_name}/${this.state.current_view}`}
                className="nav-link"
                onClick={() => this.setState({ path: null })}
              >
                Go back to viewer
              </Link>
            </Nav>
          </Col>
        </Row>
        {/* <PDF size={this.props.windowWidth} chip={this.state.chip_name} file={`sim_Tokyo-${this.state.current_view}_graph`}/> */}
        <PDF
          size={this.props.windowWidth}
          chip={this.state.chip_name}
          file={this.props.match.params.sim}
        />

        <DownloadButton chip={this.state.chip_name} />
      </Container>
    );
  }
}
