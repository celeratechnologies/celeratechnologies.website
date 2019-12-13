import React, { Component } from 'react';
import Chip from './components/Chip'
import Header from './components/Header'
import About from './components/About'
import News from './components/News'
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
        <Route path="/about/" component={About} />
        <Route path="/news/" component={News} />
        </div>
      </HashRouter>

    )
  }
}

export default App;
