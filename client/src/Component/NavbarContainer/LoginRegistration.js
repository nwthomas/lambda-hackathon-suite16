import React from "react";
import "./Navbar.css";

const LoginRegistration = props => {
  return (
    <div className="login__registration">
      <button className="login__button navbar__button">Login</button>
      <button className="register__button navbar__button">Register</button>
    </div>
  );
};

export default LoginRegistration;
