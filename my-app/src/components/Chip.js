import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap'
import DA6102 from '../resources/da6102.jpg'
import List from './List'

export default class Chip extends Component {

  state = {

  }

  constructor(props) {
    super(props)
    this.state.chip_name = this.props.match.params.name

    // replace this with AJAX call to backend 
    // let data = {
    //   chip_image: "da6102.jpg",
    //   short_description: "Highly integrated, compact PMIC",
    //   long_description: "The DA6102 is a highly integrated multi-channel PMIC designed for 2-cell lithium-ion battery powered systems. The wide input voltage range allows direct battery connection for each channel to maximize battery life. The PMIC also includes a highly accurate input current sense with circuit breaker control for battery current sensing and over-current shutdown. The DA6102 integrates two buck regulators, a BuckBoost regulator, a high current buck controller, and two always-on LDOs. This high level of integration combined with high frequency operation (up to 3 MHz) minimizes both PCB size and external component count for the smallest possible solution size. The DA6102 uses extremely low RDSon FETs to enable very high efficiency buck and BuckBoost regulation.",
    //   features: ["4.5 V to 11.5 V input range",
    //     "Input current sense with circuit breaker",
    //     "± 1 % monitoring accuracy",
    //     "Programmable internal switching frequency"],
    //   benefits: ["High efficiency",
    //     "Wide input voltage range",
    //     "Highly programmable start-up sequencing and protection features on each channel",
    //     "High accuracy ± 1 % input current sense monitoring",
    //     "High frequency operation – low-profile components"],
    //   applications: ["DSLR cameras",
    //     "MILC cameras",
    //     "Handheld point-of-sale terminals",
    //     "2-cell battery applications"]
    // }
    let data = {
      chip_image: "XC9281-XC9282.jpg",
      short_description: "HiSAT-COT ® Control Extremely Small 600mA Step-Down DC/DC Converters",
      long_description: `The XC9281/XC9282 series are 600mA synchronous rectification DC/DC converters adopting HiSAT-COT (*) control. Due to
      increasing the oscillation frequency to high frequency, 0.47uH coil with a size of 1.0 x 0.5 mm can be used. A 0.6 x 0.3 mm
      ceramic capacitor can be used for the input capacitance (CIN) and the output capacitance (CL), realizing that the mounting area
      including peripheral components can be reduced to 3.52 mm2.
      Due to increasing the oscillation frequency to a high frequency, the mounting area is reduced. Additionally, an efficiency equal
      to or higher than that of conventional products can realize by improving on-resistance and current consumption. Because of
      these features, XC9281/XC9282 series are ideal for equipment requiring miniaturization and low profile mounting area, and
      battery-powered equipment such as mobile equipment.
      Moreover, the high-speed transient response technology of the HiSAT-COT control makes it possible to minimize the
      fluctuation of the output voltage for a load transient condition. This feature is optimal for applications requiring a fast response
      and output voltage stability for an instantaneous load fluctuation like FPGA.`,
      features: ["Input Voltage Range : 2.5V ~ 5.5V",
        "Output Voltage Range : 0.7V ~ 1.15V(±2.0%)",
        "1.2V ~ 3.6V(±1.5%)",
        "Output Current : 600mA",
        "Quiescent Current : 11μA(XC9282 PWM/PFM Auto)",
        "Oscillation Frequency : 6MHz",
        "Efficiency : 89%(VIN=3.7V,VOUT=1.8V,IOUT=300mA)",
        "Control Methods : HiSAT-COT Control",
        "PWM Control (XC9281)",
        "PWM/PFM Auto (XC9282)",
        "Protection Functions : Current Limit",
        "Functions : Soft-Start, UVLO",
        "CL Discharge (Type B) ",
        "Input / Output Capacitor : Ceramic Capacitor",
        "Operating Ambient Temperature : - 40℃ ~ + 105℃",
        "Package : LGA-6B01(1.2 x 1.2 x 0.3mm)",
        "WLP-5-06(0.88 x 0.96 x 0.33mm)",
        "Environmentally : EU RoHS Compliant, Pb Free"],
      benefits: ["High efficiency",
        "Wide input voltage range",
        "Highly programmable start-up sequencing and protection features on each channel",
        "High accuracy ± 1 % input current sense monitoring",
        "High frequency op  eration – low-profile components"],
      applications: ["Smart phones / Mobile phones",
        "Wireless earphone / Headset",
        "Wearable devices",
        "DSC / Camcorder",
        "Portable game consoles",
        "Smartcard",
        "Power supply for module",
        "Various small power sources"]
    }
    this.state.chip_image = data.chip_image
    this.state.short_description = data.short_description
    this.state.long_description = data.long_description
    this.state.features = data.features
    this.state.benefits = data.benefits
    this.state.applications = data.applications
    this.state.chip_image = "../resources/" + this.state.chip_image

  }

  render() {

    return (
      <Container>
        <h1> {this.state.chip_name} </h1>
        <Row>
          <Col>
            <h2> {this.state.short_description} </h2>
            <p align="left"> {this.state.long_description} </p>
          </Col>
          <Col>
            <img src={DA6102} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> Features </h2>
            <List data={this.state.features} />
          </Col>
          <Col>
            <h2> Benefits </h2>
            <List data={this.state.benefits} />
          </Col>
          <Col>
            <h2> Applications </h2>
            <List data={this.state.applications} />
          </Col>
        </Row>
        <Button variant="info">Download Datasheet</Button>
      </Container>
    )
  }
}