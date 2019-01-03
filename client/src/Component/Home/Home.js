import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import homeHeader from "../../Images/home-header.jpg";

const Home = () => {
  return (
    <div className="home__container">
      {/* <NavLink to='/register'>register</NavLink>
      <NavLink to='/login'>login</NavLink> */}
      <div className="home__hero__container">
        <img src={homeHeader} alt="" />
        <h1 className="home__title">Lambda Financial Advice</h1>
      </div>
      <div className="home__content">
        <div className="quote__section">
          <div className="quote">
            "Money is not the only answer, but it makes a difference."
            <br />- Barack Obama
          </div>
          <div className="quote">
            "Rule No. 1: Never lose money.
            <br />
            Rule No. 2: Never forget rule 1."
            <br />- Warren Buffett
          </div>
          <div className="quote">
            "Money is the ability to fully experience life."
            <br />- Henry David Thoreau
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
