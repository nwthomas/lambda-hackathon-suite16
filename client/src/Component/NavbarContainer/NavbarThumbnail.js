import React from "react";
import defaultPicture from "../../Images/cat__default__profile.jpg";
import "./Navbar.css";
import NavbarProfileName from "./NavbarProfileName";

const NavbarThumbnail = props => {
  return (
    <div className="navbar__thumbnail">
      <img
        className="navbar__username__avatar"
        src={defaultPicture}
        alt="User thumbnail"
      />
      <a className="navbar__username__link" href="index.html">
        {props.username}
      </a>
      <NavbarProfileName name="User Name" />
    </div>
  );
};

export default NavbarThumbnail;
