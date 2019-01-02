import React from "react";
import Register from "../Registration/Register";

const Authenticate = App =>
  class extends React.Component {
    state = {
      loginVerfied: true,
      data: [],
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      avatar: "",
      location: "",
      creds: "",
      cats: "",
      role: ""
    };

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
            () => console.log(this.state.data)
          )
        );
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render() {
      return (
        <React.Fragment>
          {this.state.loginVerfied ? (
            <App />
          ) : (
            <Register
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              username={this.state.username}
              password={this.state.password}
              email={this.state.email}
              avatar={this.state.avatar}
              location={this.state.location}
              creds={this.state.creds}
              cats={this.state.cats}
              role={this.state.role}
              addNewUser={this.addNewUser}
              handleChange={this.handleChange}
            />
          )}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
