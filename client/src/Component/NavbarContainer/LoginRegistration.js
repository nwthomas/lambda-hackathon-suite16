import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const LoginRegistration = props => {
  return (
    <div className="login__registration">
      <NavLink className="navlink" to="/login">
        <button className={localStorage.token ? "navbar__button--hidden" : "login__button navbar__button"}>Login</button>
      </NavLink>
      <NavLink className="navlink" to="/register">
        <button className={localStorage.token ? "navbar__button--hidden" : "register__button navbar__button"}>Register</button>
      </NavLink>
      <NavLink className="navlink" to="/">
        <button className={localStorage.token ? "logout__button navbar__button" : "navbar__button--hidden"} onClick={props.logOutUser}>Log Out</button>
      </NavLink>
    </div>
  );
};

export default LoginRegistration;
