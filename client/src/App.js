import React, { Component } from "react";
import NavbarContainer from "./Component/NavbarContainer/NavbarContainer";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Registration/Register";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer/Footer";
import VideoChat from "./Component/VideoChat/VideoChat";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginVerified: false,
      data: [],
      loggedInUser: [],
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      avatar: "",
      location: "",
      creds: "",
      cats: "",
      role: "",
      dob: "",
      loggedIn: false,
      currentUserName: ""
    };
  }

  componentDidMount() {
    if (localStorage.token) {
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
        this.setState(
          {
            data
          },
          () => {
            if (this.state.data) {
              window.location.replace("/login");
            } else {
              alert("ERROR ACCURED");
            }
          }
        )
      );
  };

  logInUser = e => {
    e.preventDefault();
    fetch("http://71.65.239.221:5000/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(loggedInUser => {
        localStorage.setItem("token", loggedInUser.token);
        if (loggedInUser.user) {
          localStorage.setItem("loggedInUser", loggedInUser.user.firstname);
        } else {
          localStorage.clear();
          return alert("Login Failed");
        }

        this.setState(
          {
            loggedInUser,
            currentUserName: loggedInUser.user.firstname
          },
          () => {
            if (localStorage.token) {
              window.location.replace("/dashboard");
            } else {
              alert("USER NOT FOUND");
            }
          }
        );
      });
  };

  logOutUser = () => {
    return localStorage.token ? localStorage.clear() : null;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter className="App">
        <div>
          <NavbarContainer
            loggedInUser={localStorage.loggedInUser || null}
            logOutUser={this.logOutUser}
          />
          <Switch>
            <Route
              path="/"
              render={props =>
                localStorage.token ? (
                  <Dashboard
                    {...props}
                    loggedinUser={localStorage.loggedInUser || null}
                  />
                ) : (
                  <Home />
                )
              }
              exact
            />
            <Route
              path="/login"
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
              path="/register"
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
          <VideoChat />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
