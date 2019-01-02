import React from "react";
import "./Navbar.css";

const NavbarProfileName = props => {
  return <h2 className="navbar__profile__name">{props.name}</h2>;
};

export default NavbarProfileName;
