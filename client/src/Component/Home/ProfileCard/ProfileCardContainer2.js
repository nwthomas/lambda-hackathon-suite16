import React from "react";
import "./ProfileCard.css";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardBtn from "./ProfileCardBtn";
import ProfileCardThumbnail2 from "./ProfileCardThumbnail2";
import StarRatingComponent from "react-star-rating-component";

const ProfileCardContainer2 = props => {
  return (
    <div className="main__profile__wrapper2">
      <div className="profile__card__container">
        <div className="big__section__div">
          <div className="section__div">
            <ProfileCardThumbnail2 />
          </div>
          <div className="section__div">
            <ProfileCardTitle profileName="Ming" profileCat="Estate Advisor" />
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

        <ProfileCardBtn review="Under my wing, you will get your dream home in record time!" />
      </div>
    </div>
  );
};

export default ProfileCardContainer2;
