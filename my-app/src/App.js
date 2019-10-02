import React, { Component } from 'react';
import './App.css';
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App;
