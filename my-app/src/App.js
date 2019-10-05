import React, { Component } from 'react';
import Home from './views/Home'
import logo from './resources/celeraLogo.jpg' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
