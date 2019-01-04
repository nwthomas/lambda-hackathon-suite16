import React from "react";
import "./Home.css";
import homeHeader from "../../Images/home-header.jpg";
import HomeCategory from "./HomeCategory";
import ProfileCardContainer from "../ProfileCard/ProfileCardContainer";
import ProfileCardContainer1 from "../ProfileCard/ProfileCardContainer1";
import ProfileCardContainer2 from "../ProfileCard/ProfileCardContainer2";

const Home = () => {
  return (
    <div className="home__container">
      {/* <NavLink to='/register'>register</NavLink>
      <NavLink to='/login'>login</NavLink> */}
      <div className="home__hero__container">
        <img src={homeHeader} alt="" />
        <h1 className="home__title">Lambda Financial Advice</h1>
      </div>
      <HomeCategory
        chartText="Invest"
        moneyBillText="Financial Managment"
        holdingMoneyText="Taxes"
        homeText="Estate Management"
      />
      <div className="parent__profile">
        <ProfileCardContainer />
        <ProfileCardContainer1 />
        <ProfileCardContainer2 />
      </div>

      {/* --------------------------------------------------------------------------------------------------*/}

      {/* <div className="home__content">
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
      </div> */}
    </div>
  );
};

export default Home;
