import React, { Component } from "react";
import Chip from "./components/Chip";
import Header from "./components/Header";
import About from "./components/About";
import Solution from "./components/Solution";
import News from "./components/News";
import Logo from "./components/Logo";
import Viewer from "./components/Viewer";
import Simulation from "./components/Simulation";
import Updates from "./components/Updates";

import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Logo} />
          <Route path="/home" component={Logo} />
          <Route
            exact
            path="/product/:name/"
            render={props => <Chip key={props.match.params.name} {...props} />}
          />
          <Route
            exact
            path="/product/:name/:view/"
            render={props => (
              <Viewer key={props.match.params.view} {...props} />
            )}
          />
          <Route
            exact
            path="/product/:name/:view/:sim"
            render={props => (
              <Simulation key={props.match.params.view} {...props} />
            )}
          />
          <Route path="/updates" component={Updates} />
          {/* <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/solution" component={Solution} /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
