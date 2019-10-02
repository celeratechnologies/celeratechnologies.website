import React, { Component } from 'react';
export default class Home extends Component { 
  state = { 
    name: "DA6102",
    description: "The DA6102 is a highly integrated multi-channel PMIC designed for 2-cell lithium-ion battery powered systems. The wide input voltage range allows direct battery connection for each channel to maximize battery life. The PMIC also includes a highly accurate input current sense with circuit breaker control for battery current sensing and over-current shutdown. The DA6102 integrates two buck regulators, a BuckBoost regulator, a high current buck controller, and two always-on LDOs. This high level of integration combined with high frequency operation (up to 3 MHz) minimizes both PCB size and external component count for the smallest possible solution size. The DA6102 uses extremely low RDSon FETs to enable very high efficiency buck and BuckBoost regulation."
}
  
  render () {                                   
      return (
        <div>
           <h1> {this.state.name} </h1>
           <p> {this.state.description} </p>
        </div>
      )
   }
}