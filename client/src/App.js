import React, { Component } from "react";
import NavbarContainer from "./Component/NavbarContainer/NavbarContainer";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Fuse from "fuse.js";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Registration/Register";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer/Footer";
import Records from './Component/Records/Records'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginVerified: false,
      data: [],
      profiles: [],
      loggedInUser: [],
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      avatar: "",
      location: "",
      creds: "",
      cats: "dogs", // DON'T TOUCH -> not used, but needed as placeholder to make registration form work
      role: "",
      specialty: "",
      dob: "",
      loggedIn: false,
      currentUserName: "",
      searchableProfiles: [],
      loggedInRole: "",
      hasSetRole: ""
    };
  }

  componentDidMount() {
    fetch("https://comptagroup.com/api/users")
      .then(res => res.json())
      .then(profiles => this.setState({ profiles }));

    if (localStorage.token) {
      return this.setState({
        loggedIn: true
      });
    }
  }

  addNewUser = e => {
    e.preventDefault();
    fetch("https://comptagroup.com/api/users/register", {
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

  deleteUser = id => {
    fetch(`https://comptagroup.com/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  logInUser = e => {
    e.preventDefault();
    fetch("https://comptagroup.com/api/users/login", {
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
          localStorage.setItem("loginId", loggedInUser.user._id);
          localStorage.setItem("loggedInUser", loggedInUser.user.firstname);
          localStorage.setItem("avatar", loggedInUser.user.avatar);
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
              window.location.replace("/");
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

    if (e.target.name === "role" && e.target.value === "advisee") {
      this.setState({
        specialty: "N/A"
      });
    } else if (e.target.name === "profile-searchbar") {
      this.updateSearchableProfiles(e.target.value);
    }
  };

  updateSearchableProfiles = target => {
    if (!this.state.searchableProfiles.length && !this.state.hasSetRole) {
      const profileArr = this.state.profiles.filter(profile => profile.role !== target);
      this.setState({searchableProfiles: profileArr, loggedInRole: target, hasSetRole: true});
    } else if (this.state.hasSetRole) {
      if (!target.length) {
        const profileArr = this.state.profiles.filter(profile => profile.role !== this.state.loggedInRole);
        this.setState({searchableProfiles: profileArr});
      } else {
        const fuse = new Fuse(this.state.profiles, {
          shouldSort: true,
          threshold: 0.1,
          minMatchCharLength: 1,
          keys: [
            "firstname",
            "lastname",
            "username"
          ]
        });
        const profileArr = fuse.search(target).filter(profile => profile.role !== this.state.loggedInRole);
        this.setState({searchableProfiles : profileArr});
      }
    }
  };

  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <NavbarContainer
            loggedInUser={localStorage.loggedInUser || null}
            logOutUser={this.logOutUser}
            userAvatar={localStorage.avatar}
          />
          <Switch>
            <Route
              path="/"
              render={props =>
                localStorage.token ? (
                  <Dashboard
                    {...props}
                    loggedinUser={localStorage.loggedInUser || null}
                    _id={localStorage.loginId}
                    profiles={this.state.profiles}
                    handleChange={this.handleChange}
                    searchableProfiles={this.state.searchableProfiles}
                    updateSearchableProfiles={this.updateSearchableProfiles}
                    hasSetRole={this.state.hasSetRole}
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
                  selectedRole={this.state.role}
                />
              )}
            />
             <Route
              path="/records"
              component={Records}
            />
            {/* <Route path='/dashboard'

              render={props => (
                this.isAuthenticated ? (<Dashboard
                  {...props}
                  state={this.state}
                />) : alert('user not found')

              )} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
