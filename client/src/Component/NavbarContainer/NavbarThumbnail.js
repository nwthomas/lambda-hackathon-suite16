import React from "react";
import defaultPicture from "../../Images/cat__default__profile.jpg";
import "./Navbar.css";
import NavbarProfileName from "./NavbarProfileName";

const NavbarThumbnail = props => {
  return (
    <div className="navbar__thumbnail">
      <div className="navbar__username__avatar">
        <img src={defaultPicture} alt="User thumbnail" />
      </div>
      <a className="navbar__username__link" href="index.html">
        Username Placeholder
      </a>
      <NavbarProfileName name="User Name" />
    </div>
  );
};

export default NavbarThumbnail;
