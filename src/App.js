import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Master from "./components/Master";

const style = {
  nav: {
    margin: "20px",
    marginLeft: "40px"
  }
};

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
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Master / Detail</h1>
        </header>

        <div style={style.nav}>
          <Link to="/persons">Persons</Link>
        </div>
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
