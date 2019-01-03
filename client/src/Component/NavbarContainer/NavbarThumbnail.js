import React from "react";
import defaultPicture from "../../Images/cat__default__profile.jpg";
import "./Navbar.css";

const NavbarThumbnail = props => {
  return (
    <div className="navbar__thumbnail">
      <div className="navbar__username__avatar">
        <img src={defaultPicture} alt="User thumbnail" />
      </div>
      <a className="navbar__username__link" href="/">
        {!props.loggedInUser ? null : props.loggedInUser}
      </a>
    </div>
  );
};

export default NavbarThumbnail;
