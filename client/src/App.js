import React, { Component } from 'react';
import NavbarContainer from './Component/NavbarContainer/NavbarContainer';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Registration/Register';
import Dashboard from './Component/Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      "loginVerified": false,
      "data": [],
      "loggedInUser": [],
      "firstname": '',
      "lastname": '',
      "username": '',
      "password": '',
      "email": '',
      "avatar": '',
      "location": '',
      "creds": '',
      "cats": '',
      "role": '',
      "loggedIn": false
    };
  }

  componentDidMount() {
    if (window.localStorage.token) {
      return this.setState({
        loggedIn: true
      });
    }
  }

  addNewUser = e => {
    e.preventDefault();
    fetch("http://71.65.239.221:5000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          data
        })
      );
  };

  logInUser = e => {
    e.preventDefault();
    fetch('http://71.65.239.221:5000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(loggedInUser => {
        localStorage.setItem('token', loggedInUser.token)
        this.setState({
          loggedInUser
        })
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(window.localStorage)
    return (
      <BrowserRouter className='App'>
        <div>
          <NavbarContainer
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            username={this.state.username}
          />
          <Switch>
            <Route path='/' render={() => (
              this.loggedIn ? (
                <Dashboard />
              ) : (
                  <Home />
                )
            )} exact />
            <Route
              path='/login'
              render={props => (
                <Login
                  {...props}
                  state={this.state}
                  handleChange={this.handleChange}
                  logInUser={this.logInUser}
                />
              )}
            />
            <Route
              path='/register'
              render={props => (
                <Register
                  {...props}
                  state={this.state}
                  addNewUser={this.addNewUser}
                  handleChange={this.handleChange}
                />
              )}
            />
            {/* <Route path='/dashboard'

              render={props => (
                this.isAuthenticated ? (<Dashboard
                  {...props}
                  state={this.state}
                />) : alert('user not found')

              )} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
