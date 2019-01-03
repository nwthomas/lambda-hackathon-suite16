import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const LoginRegistration = props => {
  return (
    <div className="login__registration">
      <NavLink className="navlink" to="/login">
        <button className="login__button navbar__button">Login</button>
      </NavLink>
      <NavLink className="navlink" to="/register">
        <button className="register__button navbar__button">Register </button>
      </NavLink>
    </div>
  );
};

export default LoginRegistration;
