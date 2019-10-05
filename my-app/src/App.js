import React, { Component } from 'react';
import Chip from './views/Chip'
import Header from './components/Header'
import logo from './resources/celeraLogo.jpg'
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div className="App">
          <Header />
          <img src={logo} alt="Logo" />;
        <Route path="/product/:name" component={Chip} />
        </div>
      </HashRouter>

    )
  }
}

export default App;
