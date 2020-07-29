import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Container } from "react-bootstrap";
import List from "./List";
import PDF from "./PDF";
import DownloadButton from "./DownloadButton";
import scrollToComponent from "react-scroll-to-component";

export default class Chip extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      isDataFetched: false,
      count: 0,
    };
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
        <h1> {this.state.chip_name} </h1>
        <Row>
          <Col>
            {/* make this text wrapped */}
            <h2> {this.state.short_description} </h2>
            <p align="left"> {this.state.long_description} </p>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Nav title="Show Larger">
                <Link
                  to={`/product/${this.state.chip_name}/MODULEtop`}
                  className="nav-link"
                  onClick={() => this.setState({ path: null })}
                >
                  Explore Schematic
                </Link>
              </Nav>
            </div>
            <PDF size={400} chip={this.state.chip_name} file={this.state.chip_image} />
            {this.state.sections.map((d) => {
              return (
                <button
                  key = {d.toString()}
                  onClick={() =>
                    scrollToComponent(this[d], {
                      offset: -100,
                      align: "top",
                      duration: 500,
                    })
                  }
                >
                  Go To {d}
                </button>
              );
            })}
          </Col>
        </Row>

        {this.state.sections.map((d) => {
          // if d is an image (this can be done with API call) then...
          // return (
          //   <section className={d} ref={(section) => { this[d] = section; }}>
          //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          //       <Row>
          //         <Col>
          //           <h2> {d} </h2>
          //           <PDF size="400" chip={this.state.chip_name} file={this.state.d} />
          //         </Col>
          //       </Row>
          //     </div>
          //   </section>
          // )
          return (
            <section
              key = {d.toString()}
              className={d}
              ref={(section) => {
                this[d] = section;
              }}
            >
              {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
              <Row>
                <Col>
                  <h2 align="left"> {d} </h2>
                  <List data={this.state[d.toLowerCase()]} />
                </Col>
              </Row>
              {/* </div> */}
            </section>
          );
        })}
        {/* TODO: fix this pdf */}
        <DownloadButton chip={this.state.chip_name} file={"datasheet"} />
      </Container>
    );
  }
}
