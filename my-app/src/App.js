import React, { Component } from 'react';
import Chip from './components/Chip'
import Header from './components/Header'
import About from './components/About'
import Solution from './components/Solution'
import News from './components/News'
import Logo from './components/Logo'
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Logo />
          <Route path="/product/:name/:view" component={Chip} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/solution" component={Solution} />

        </div>
      </HashRouter>

    )
  }
}

export default App;
