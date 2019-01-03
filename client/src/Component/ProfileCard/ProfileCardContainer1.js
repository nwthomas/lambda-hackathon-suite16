import React from "react";
import "./ProfileCard.css";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardBtn from "./ProfileCardBtn";
import ProfileCardThumbnail1 from "./ProfileCardThumbnail1";
import StarRatingComponent from "react-star-rating-component";

const ProfileCardContainer1 = props => {
  return (
    <div className="main__profile__wrapper1">
      <div className="profile__card__container">
        <div className="big__section__div">
          <div className="section__div">
            <ProfileCardThumbnail1 />
          </div>
          <div className="section__div">
            <ProfileCardTitle profileName="Elena" profileCat="Tax Advisor" />
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

        <ProfileCardBtn review="Don't spend more on taxes than you legally need to. Come save with me today!" />
      </div>
    </div>
  );
};

export default ProfileCardContainer1;
