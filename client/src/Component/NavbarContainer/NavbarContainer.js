import React from "react";
import NavbarThumbnail from "./NavbarThumbnail";
import "./Navbar.css";

const NavbarContainer = props => {
  return (
    <div className="navbar__container">
      <NavbarThumbnail />
    </div>
  );
};

export default NavbarContainer;
