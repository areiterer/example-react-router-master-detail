import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Master from "./components/Master";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: "Siggi" },
        { id: 2, name: "Kurti" },
        { id: 3, name: "Jenny" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Link to="/persons">Persons</Link>
        <hr />

        <Route
          path="/persons"
          render={props => <Master {...props} items={this.state.items} />}
        />
      </div>
    );
  }
}

export default App;
