import React, { Component } from 'react';
import Chip from './components/Chip'
import Header from './components/Header'
import About from './components/About'
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
        {/* <Route exact path="/product/:name/top" component={Chip} /> */}
            <Route path="/product/:name/:view" component={Chip} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
        </div>
      </HashRouter>

    )
  }
}

export default App;
