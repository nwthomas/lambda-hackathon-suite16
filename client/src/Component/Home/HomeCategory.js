import React from "react";
import chart from "../../Images/chart.svg";
import holdingMoney from "../../Images/holding-money.svg";
import home from "../../Images/home.svg";
import moneyBill from "../../Images/money-bill.svg";
import "./Home.css";
const HomeCategory = props => {
  return (
    <div className="icon__wrapper">
      <div className="icon__item item__a">
        <img src={chart} className="category__icon" alt="icon" />
        <h2 className="category__text">Invest</h2>
      </div>

      <div className="icon__item item__b">
        <img src={holdingMoney} className="category__icon" alt="icon" />
        <h2 className="category__text">Taxes</h2>
      </div>

      <div className="icon__item item__c">
        <img src={home} className="category__icon" alt="icon" />
        <h2 className="category__text">
          Estate
          <br />
          Management
        </h2>
      </div>

      <div className="icon__item item__d">
        <img src={moneyBill} className="category__icon" alt="icon" />
        <h2 className="category__text">
          Financial
          <br />
          Management
        </h2>
      </div>
    </div>
  );
};

export default HomeCategory;
