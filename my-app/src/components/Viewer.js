import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Container, NavDropdown } from "react-bootstrap";
import PDF from "./PDF";
import Description from "./Description";
import DownloadButton from "./DownloadButton";
import SimulationDropdown from "./SimulationDropdown";

export default class Viewer extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setState({
      isDataFetched: false,
      count: 0
    });
  }

  //   componentDidMount() {
  //     // replace this with AJAX call to backend
  //     let data = {
  //         "chip_name": "JUNO",
  //         "chip_image": "JUNO.pdf",
  //         "short_description": "Celera Building Block Library",
  //         "long_description": "The Celera Building Block Library consits of over 80 symbols that make up all the analog and digital cells needed for IC designs.",
  //         "features": [
  //           "Fully paramterized user inputs",
  //           "Parameters change the function and performance of each block",
  //           "1.2V ~ 3.6V(±1.5%)",
  //           "Environmentally:EU RoHs Complieant, Pb Free"
  //         ],
  //         "applications": [
  //           "Smart phone / Mobile phones",
  //           "Wireless earphone / Headset",
  //           "Wearable devices",
  //           "DSC / Camcorder",
  //           "Portable game consoles",
  //           "Smartcard",
  //           "Power supply for module",
  //           "Various small power sources"
  //         ],
  //         "components": {
  //           "MODULEfet": {
  //             "description": "This is the fet view",
  //             "simulations": ["fet_sim1", "fet_sim2", "fet_sim3"]
  //           },
  //           "MODULEfetdriver": {
  //             "description": "This is the fetdriver view",
  //             "simulations": ["fetdriver_sim"]
  //           },
  //           "padopendrain": {
  //             "description": "This is the PAD Open Drain view",
  //             "simulations": ["padopendrain_sim"]
  //           },
  //           "paddetect": {
  //             "description": "This is the paddetect view",
  //             "simulations": ["paddetect_sim"]
  //           },
  //           "gpio": {
  //             "description": "This is the gpio view",
  //             "simulations": ["gpio_sim"]
  //           },
  //           "vbias": {
  //             "description": "This is the vbias view",
  //             "simulations": ["vbias_sim"]
  //           },
  //           "paddigitalinput": {
  //             "description": "This is the paddigitalinput view",
  //             "simulations": ["paddigitalinput_sim"]
  //           },
  //           "paddigitaloutput": {
  //             "description": "This is the paddigitaloutput view",
  //             "simulations": ["paddigitaloutput_sim"]
  //           },
  //           "datamap": {
  //             "description": "This is the datamap view",
  //             "simulations": ["datamap_sim"]
  //           },
  //           "schmitt": {
  //             "description": "This is the schmitt view",
  //             "simulations": ["schmitt_sim"]
  //           },
  //           "switch": {
  //             "description": "This is the switch view",
  //             "simulations": ["switch_sim"]
  //           },
  //           "porb": {
  //             "description": "This is the porb view",
  //             "simulations": ["porb_sim"]
  //           },
  //           "reference": {
  //             "description": "This is the reference view",
  //             "simulations": ["reference_sim"]
  //           },
  //           "thermal": {
  //             "description": "This is the thermal view",
  //             "simulations": ["thermal_sim"]
  //           },
  //           "oscillator": {
  //             "description": "This is the oscillator view",
  //             "simulations": ["oscillator_sim"]
  //           },
  //           "currentgenerator": {
  //             "description": "This is the currentgenerator view",
  //             "simulations": ["currentgenerator_sim"]
  //           },
  //           "currentmirror": {
  //             "description": "This is the currentmirror view",
  //             "simulations": ["currentmirror_sim"]
  //           },
  //           "amux": {
  //             "description": "This is the amux view",
  //             "simulations": ["amux_sim"]
  //           },
  //           "clamp": {
  //             "description": "This is the clamp view",
  //             "simulations": ["clamp_sim"]
  //           },
  //           "vbuffer": {
  //             "description": "This is the vbuffer view",
  //             "simulations": ["vbuffer_sim"]
  //           },
  //           "gm": {
  //             "description": "This is the gm view",
  //             "simulations": ["gm_sim"]
  //           },
  //           "comparator": {
  //             "description": "This is the comparator view",
  //             "simulations": ["comparator_sim"]
  //           },
  //           "currentlimit": {
  //             "description": "This is the currentlimit view",
  //             "simulations": ["currentlimit_sim"]
  //           },
  //           "resistor": {
  //             "description": "This is the resistor view",
  //             "simulations": ["resistor_sim"]
  //           },
  //           "capacitor": {
  //             "description": "This is the capacitor view",
  //             "simulations": ["capacitor_sim"]
  //           },
  //           "feedbackdivider": {
  //             "description": "This is the feedbackdivider view",
  //             "simulations": ["feedbackdivider_sim"]
  //           },
  //           "resistordivider": {
  //             "description": "This is the resistordivider view",
  //             "simulations": ["resistordivider_sim"]
  //           },
  //           "tie": {
  //             "description": "This is the tie view",
  //             "simulations": ["tie_sim"]
  //           },
  //           "logic gates": {
  //             "description": "This is the logic gate view",
  //             "simulations": ["logic_gate_sim"]
  //           },
  //           "dff": {
  //             "description": "This is the dff view",
  //             "simulations": ["dff_sim"]
  //           },
  //           "srlatch": {
  //             "description": "This is the srlatch view",
  //             "simulations": ["srlatch_sim"]
  //           },
  //           "jklatch": {
  //             "description": "This is the jklatch view",
  //             "simulations": ["jklatch_sim"]
  //           },
  //           "decoder": {
  //             "description": "This is the decoder view",
  //             "simulations": ["decoder_sim"]
  //           },
  //           "dmux": {
  //             "description": "This is the dmux view",
  //             "simulations": ["dmux_sim"]
  //           },
  //           "oneshot": {
  //             "description": "This is the oneshot view",
  //             "simulations": ["oneshot_sim"]
  //           },
  //           "tribuffer": {
  //             "description": "This is the tribuffer view",
  //             "simulations": ["tribuffer_sim"]
  //           },
  //           "delay": {
  //             "description": "This is the delay view",
  //             "simulations": ["delay_sim"]
  //           },
  //           "timingskew": {
  //             "description": "This is the timingskew view",
  //             "simulations": ["timingskew_sim"]
  //           },
  //           "clocksync": {
  //             "description": "This is the clocksync view",
  //             "simulations": ["clocksync_sim"]
  //           },
  //           "levelshifter": {
  //             "description": "This is the levelshifter view",
  //             "simulations": ["levelshifter_sim"]
  //           },
  //           "logicshifter": {
  //             "description": "This is the logicshifter view",
  //             "simulations": ["logicshifter_sim"]
  //           },
  //           "digitalcomparator": {
  //             "description": "This is the digitalcomparator view",
  //             "simulations": ["digitalcomparator_sim"]
  //           },
  //           "counter": {
  //             "description": "This is the counter view",
  //             "simulations": ["counter_sim"]
  //           },
  //           "pulsestretch": {
  //             "description": "This is the pulsestretch view",
  //             "simulations": ["pulsestretch_sim"]
  //           },
  //           "dac": {
  //             "description": "This is the dac view",
  //             "simulations": ["dac_sim"]
  //           },

  //           "cboot": {
  //             "description": "This is the cboot view",
  //             "simulations": ["cboot_sim"]
  //           }
  //         },
  //         "sections": ["Features", "Applications"]
  //       }

  //     this.setState({
  //       chip_image: data.chip_image,
  //       short_description: data.short_description,
  //       long_description: data.long_description,
  //       features: data.features,
  //       applications: data.applications,
  //       components: data.components,
  //       chip_name: this.props.match.params.name,
  //       path: null,
  //       isDataFetched: true
  //     });
  //     if (this.props.match.params.view !== undefined) {
  //       this.setState({ current_view: this.props.match.params.view });
  //     } else {
  //       this.setState({ current_view: "MODULEtop" });
  //     }
  //   }

  componentDidMount() {
    fetch(`JUNO/JUNO.json`)
      .then(res => res.json())
      .then(data => {
        console.log("data:", data);
        console.log("components:", data.components);
        this.setState({ current_view: this.props.match.params.view });
        this.setState({
          chip_image: data.chip_image,
          short_description: data.short_description,
          long_description: data.long_description,
          features: data.features,
          applications: data.applications,
          components: data.components,
          chip_name: this.props.match.params.name,
          path: null,
          isDataFetched: true
        });
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
        view: this.props.match.params.view
      });
    }
  }

  render() {
    console.log("in render");
    console.log(this.state);
    console.log(this.state.components);
    console.log(this.state.current_view);

    if (!this.state.isDataFetched) return null;
    return (
      <Container>
        <h1> {this.state.chip_name} Viewer </h1>
        <p>Currently at {this.state.current_view}</p>
        <Description
          data={this.state.components}
          current_view={this.state.current_view}
        />
        {/* get the image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Row>
            <NavDropdown title="Go to different view" id="basic-nav-dropdown">
              <Link
                to={`/product/${this.state.chip_name}/MODULEtop`}
                className="nav-link"
                onClick={() => this.setState({ path: null })}
              >
                top
              </Link>
              {/* {Object.keys(() => this.state.path ? this.state.components[this.state.path] : this.state.components).map((d) => { */}
              {Object.keys(this.state.components).map(d => {
                return (
                  <Link
                    to={`/product/${this.state.chip_name}/${d}`}
                    className="nav-link"
                    onClick={() => this.setState({ path: d })}
                  >
                    {d}
                  </Link>
                );
              })}
            </NavDropdown>
            <Link
              to={`/product/${this.state.chip_name}`}
              className="nav-link"
              onClick={() => this.setState({ path: null })}
            >
              Go back to datasheet
            </Link>
            <SimulationDropdown
              chip_name={this.state.chip_name}
              data={this.state.components}
              current_view={this.state.current_view}
            />
          </Row>
        </div>

        {/* Link to clickable tree viewer https://reactjsexample.com/a-simple-react-tree-menu-component/ */}
        <PDF
          size={this.props.windowWidth}
          chip={this.state.chip_name}
          file={this.state.current_view}
        />
        <DownloadButton chip={this.state.chip_name} />
      </Container>
    );
  }
}
