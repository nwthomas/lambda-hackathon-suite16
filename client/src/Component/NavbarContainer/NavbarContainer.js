import React from "react";
import NavbarThumbnail from "./NavbarThumbnail";
import "./Navbar.css";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";

const NavbarContainer = props => {
  return (
    <div className="navbar__container">
      <NavbarThumbnail />
      <div className="navbar__btn__container">
        <RegisterButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default NavbarContainer;
