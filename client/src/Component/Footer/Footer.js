import React from "react";
import "./Footer.css";
import Logo from "./footerlogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__outer__container">
        <div className="footer__container">
          <div className="section section1" />
          <div className="section section2" />
          <div className="section section3" />
        </div>
        <div className="footer__copyright__right">
          <img className="footer_logo" src={Logo} alt="" />
          <div className="footer__copyright">© 2018 SUITE_16</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
