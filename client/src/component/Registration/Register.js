import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="register__container">
          <form>
            <input
              className="register__username"
              type="text"
              name="username"
              placeholder="Username"
            />
            <br />
            <input
              className="register__firstname"
              type="text"
              name="firstname"
              placeholder="First name"
            />
            <input
              className="register__lastname"
              type="text"
              name="lastname"
              placeholder="Last name"
            />
            <br />
            <input
              className="register__password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <input
              className="register__email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <br />
            <input
              className="register__avatar"
              type="text"
              name="avatar"
              placeholder="Avatar url"
            />
            <br />
            <input
              className="register__dob"
              type="date"
              name="dob"
              min="1940-01-01"
              max="2019-01-02"
            />
            <input
              className="register__location"
              type="text"
              name="location"
              placeholder="Location"
            />
            <br />

            <input
              className="register__credentials"
              type="text"
              name="creds"
              placeholder="Credentials"
            />
            <br />
            <select className="register__role-list" name="cats">
              <option value="taxes">Taxes</option>
              <option value="investing">Investing</option>
              <option value="estate">Estate Planning</option>
              <option value="financial">Financial Planning</option>
            </select>

            <input
              className="register__role-input"
              type="text"
              name="role"
              placeholder="Role"
            />
            <div>
              <button className="register__button button">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
