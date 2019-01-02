import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const RegisterButton = props => {
  return (
    <Link to="/register">
      <button className="register__btn">Register</button>
    </Link>
  );
};

export default RegisterButton;
