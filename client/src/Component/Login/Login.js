import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = props => {
  return (
    <div className="login__container">
      <form className="login__form" onSubmit={props.logInUser}>
        <h2 className="login__form__heading">Member Login</h2>
        <div className="login__form__field">
          <span className="login__form__field__label">Username</span>
          <input
            className="login__form__field__text"
            type="text"
            name="username"
            placeholder="Enter your username"
            handleChange={props.handleChange}
          />
        </div>
        <div className="login__form__field">
          <span className="login__form__field__label">Password</span>
          <input
            className="login__form__field__text"
            type="password"
            name="password"
            placeholder="Enter your password"
            handleChange={props.handleChange}
          />
        </div>
        <button className="login__form__button" type="submit">
          Log In
        </button>
        <div className="login__form__register">
          Not registered yet?{" "}
          <NavLink to="/register" className="login__form__register__link">
            Create an account
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
