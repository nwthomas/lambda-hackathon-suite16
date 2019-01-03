import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import moneyBill from "../../Images/money-bill.svg";

const Home = () => {
  return (
    <div className="home__container">
      {/* <NavLink to='/register'>register</NavLink>
      <NavLink to='/login'>login</NavLink> */}
      <div className="money__img">
        <img className="money__icon" src={moneyBill} alt="Money bill waving" />
      </div>
    </div>
  );
};

export default Home;
