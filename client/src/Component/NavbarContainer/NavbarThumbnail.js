import React from "react";
import navLogo from "../../Images/navlogo.svg";
import defaultPicture from "../../Images/cat__default__profile.jpg";
import "./Navbar.css";

const NavbarThumbnail = props => {
  return (
    <div className="navbar__thumbnail">
      <div className={localStorage.token ? "navbar__logo-image--hidden" : "navbar__logo-image"}>
        <img src={navLogo} alt="Company logo" />
      </div>
      <div className={localStorage.token ? "navbar__username__avatar" : "navbar__username__avatar--hidden"}>
        <img src={defaultPicture} alt="User thumbnail" />
      </div>
      <a className="navbar__username__link" href="/">
        {localStorage.token && props.loggedInUser ? props.loggedInUser : "SUITE_16"}
      </a>
    </div>
  );
};

export default NavbarThumbnail;
