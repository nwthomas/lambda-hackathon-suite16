import React from "react";

const NavbarThumbnail = props => {
  return (
    <div className="navbar__thumbnail">
      <img
        className="navbar__username__avatar"
        src="../../Images/cat__default__profile.jpg"
        alt="User thumbnail"
      />
      <a className="navbar__username__link" href="index.html">
        {props.username}
      </a>
    </div>
  );
};

export default NavbarThumbnail;
