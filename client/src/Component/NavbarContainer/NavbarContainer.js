import React from "react";
import NavbarThumbnail from "./NavbarThumbnail";
import LoginRegistration from "./LoginRegistration";
import "./Navbar.css";

const NavbarContainer = props => {
  return (
    <div className="navbar__container">
      <NavbarThumbnail firstname={props.firstname}
        lastname={props.lastname}
        username={props.username} />
      <LoginRegistration />
    </div>
  );
};

export default NavbarContainer;
