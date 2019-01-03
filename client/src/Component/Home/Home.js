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
        <h1 className="home__title">Lambda Financial Advisor</h1>
        <p>
          "A goal without a plan is just a wish." - Antoine de Saint-Exupery
        </p>
      </div>
    </div>
  );
};

export default Home;
