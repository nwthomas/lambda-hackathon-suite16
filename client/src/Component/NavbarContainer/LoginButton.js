import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const LoginButton = props => {
  return (
    <Link to="/login">
      <button className="login__btn">Login</button>
    </Link>
  );
};

export default LoginButton;
