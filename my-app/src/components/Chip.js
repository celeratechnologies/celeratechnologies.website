import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Row, Col, Container } from 'react-bootstrap'
import List from './List'
import PDF from './PDF'
import DownloadButton from './DownloadButton';
import { Button } from '../../../../../../node_modules/react-bootstrap';
import axios from 'axios'

export default class Chip extends Component {

  state = {}

  constructor(props) {
    super(props)
    this.setState({
      isDataFetched: false,
      count: 0
    })

  }
  componentDidMount() {

    // axios.get('Toyko.json') // JSON File Path
    //   .then(data => {
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
    //     })
    //     if (this.props.match.params.view !== undefined) {
    //       this.setState({ current_view: this.props.match.params.view })
    //     } else {
    //       this.setState({ current_view: "top" })
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // replace this with AJAX call to backend
    let data = {
      "chip_name": "Tokyo",
      "chip_image": "top.pdf",
      "short_description": "Highly integrated, compact PMIC",
      "long_description": "The XC9281/XC9282 series are 600mA synchronoous rectification DC/DC converters adopting HiSAT-COT (*) control.  Due to increasing the oscillation frequency to high frequency, 0.47uH coil with a size of 1.0 x 0.5 mm can be used. A 0.6 x 0.3 mm ceramic capacitor can be used for the input capacitance (Cin) and the output capacitance(Cl), realizing that the mounting area inluding peripheral components can be reduced to 3.52 mm2. Due to increasing the oscillation frequency to a high frequency, the mounting area is reduced. Additionally, an efficiency equal to or higher than that of conventional products can realize by improving on-resistance and current consumption.  Becasue of these featrues, XC9281/XC9282 series are ideal for equipment requiring miniaturization and low profile mounting area, and battery-powered equipment such as mobile equipment.  Moreover, the high-speed transient response technology of the HiSAT-COT control makes it possible to minimize the fluctuation of the output voltage for a load transient condition. This feature is optimal for applilcations requiring a fast response and output voltage stability for an instantaneous load fluctuation like FPGA.  (*)HiSAT-COT is a proprietary high -speed transient response technology for DC?DC converter which was developed by Torex.  It is Ideal for the LSI's that require high precision and high stability power supply voltage.",
      "features": [
        "Input Voltage Range:2.5V ~ 5.5V",
        "Output Voltage Range:0.7V ~ 1.15V(±2.0%)",
        "1.2V ~ 3.6V(±1.5%)",
        "Output Current:600mA",
        "Quiescent Current:11uA(XC9282 PWM/PFM Auto)",
        "Oscillation Frequency:6MHz",
        "Efficiency:89%(Vin-3.7V,Vout=1.8V,Iout=300mA)",
        "Control Methods:HiSAT-COT Control",
        "PWM Control (SC9281)",
        "PWM/PFM Auto(XC9282)",
        "Protection Functions:Current Limit",
        "Functions:Soft-Start, UVLO",
        "Cl Discharge (TypeB)",
        "Input/Output Capacitor Ceramic Capacitor",
        "Operating Ambient Temperature:-40C ~ +105C",
        "Package:LGA-6B01 (1.2 x 1.2 x 0.3mm)",
        "WLP-5-06(0.88 x 0.96 x 0.33mm)",
        "Environmentally:EU RoHs Complieant, Pb Free"
      ],
      "applications": [
        "Smart phone / Mobile phones",
        "Wireless earphone / Headset",
        "Wearable devices",
        "DSC / Camcorder",
        "Portable game consoles",
        "Smartcard",
        "Power supply for module",
        "Various small power sources"
      ],
      "components": {
        "vout": {},
        "service": {},
        "regulation": {
          "feedback": {},
          "cot": {}
        },
        "logic": {},
        "power": {}
      }
    }
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
    })
    if (this.props.match.params.view !== undefined) {
      this.setState({ current_view: this.props.match.params.view })
    } else {
      this.setState({ current_view: "top" })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.name !== this.props.match.params.name || prevProps.match.params.view !== this.props.match.params.view) {
      this.forceUpdate()
      this.setState({
        name: this.props.match.params.name,
        view: this.props.match.params.view
      })
      console.log('update')
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Nav title="Show Larger">
                <Link to={`/product/${this.state.chip_name}/top`} className="nav-link" onClick={() => this.setState({ path: null })}>Explore Schematic
              </Link>
              </Nav>
            </div>
            <PDF size="400" chip={this.state.chip_name} file={this.state.current_view} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> Features </h2>
            <List data={this.state.features} />
          </Col>
          <Col>
            <h2> Applications </h2>
            <List data={this.state.applications} />
          </Col>
        </Row>
        <DownloadButton chip={this.state.chip_name} />
      </Container>
    )
  }


}