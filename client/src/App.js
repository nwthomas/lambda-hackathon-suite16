import React, { Component } from "react";
import NavbarContainer from "./Component/NavbarContainer/NavbarContainer";
import "./App.css";
// import Authenticate from './component/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <NavbarContainer />
      </div>
    );
  }
}

export default App;
// export default Authenticate(App);
