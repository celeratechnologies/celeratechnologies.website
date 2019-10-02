import React, { Component } from 'react';
import './App.css';
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './resources/celeraLogo.jpg' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Logo" />;
        <Home />
      </div>
    )
  }
}

export default App;
