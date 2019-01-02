import React, { Component } from 'react';
import NavbarContainer from './component/NavbarContainer/NavbarContainer';
import './App.css';
import Authenticate from './component/Authentication/Authenticate';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavbarContainer />
      </div>
    );
  }
}

export default Authenticate(App);
