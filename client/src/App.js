import React, { Component } from "react";
import NavbarContainer from "./Component/NavbarContainer/NavbarContainer";
import "./App.css";
import Authenticate from "./Component/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NavbarContainer />
      </div>
    );
  }
}

export default Authenticate(App);
