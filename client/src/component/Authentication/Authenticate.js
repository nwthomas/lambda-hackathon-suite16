import React from 'react';
import Register from '../Registration/Register';

const Authenticate = App =>
  class extends React.Component {
    state = {
      loginVerfied: false
    };

    render() {
      return (
        <React.Fragment>
          {this.state.loginVerfied ? (
            <App logout={this.logout} />
          ) : (
            <Register />
          )}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
