import React from "react";
import "./ProfileCard.css";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardBtn from "./ProfileCardBtn";
import ProfileCardThumbnail from "./ProfileCardThumbnail";
import StarRatingComponent from "react-star-rating-component";

const ProfileCardContainer = props => {
  return (
    <div className="main__profile__wrapper">
      <div className="profile__card__container">
        <div className="big__section__div">
          <div className="section__div">
            <ProfileCardThumbnail />
          </div>
          <div className="section__div">
            <ProfileCardTitle profileName="Simon" profileCat="Investor" />
            <div className="star">
              {" "}
              <StarRatingComponent
                className="star"
                name="rate2"
                editing={false}
                starCount={5}
                value={8}
              />
            </div>
          </div>
        </div>
        <hr className="line" />

        <ProfileCardBtn review="Wise spending is part of wise investing, and its never too late to start!" />
      </div>
    </div>
  );
};

export default ProfileCardContainer;
