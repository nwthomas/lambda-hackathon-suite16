import React from "react";
import "./UserCards.css";
import UserCardTitle from "./UserCardTitle";
import UserCardBtn from "./UserCardBtn";
import UserCardThumbnail from "./UserCardThumbnail";
// import StarRatingComponent from "react-star-rating-component";

const UserCards = props => {
  return (
    <div className="main__profile__wrapper">
      <div className="profile__card__container">
        <div className="big__section__div">
          <div className="section__div">
            <UserCardThumbnail avatar={props.avatar} />
          </div>
          <div className="section__div">
            <UserCardTitle
              firstname={props.firstname}
              specialty={props.specialty}
            />
          </div>
        </div>
        <hr className="line" />

        <UserCardBtn
          _id="5c2d14eedf504919614c986e"
          review="Wise spending is part of wise investing, and its never too late to start!"
        />
      </div>
    </div>
  );
};

export default UserCards;

// name
// specialty

// rating
// profileCat
