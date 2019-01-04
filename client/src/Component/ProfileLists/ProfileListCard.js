import React from "react";
import "./ProfileLists.css";

const ProfileListCard = props => {
  return (
    <div className="dashboard__profile__container">
      <div className="">
        <div className="dashboard__avatar__photo">
          <img src={props.avatar} alt="User avatar" />
        </div>
        <div className="dashboard__name__rating">
          <p className="dashboard__name">{props.firstname}</p>
          <p className="dashboard__speciality">{props.specialty}</p>
          <div className="dashboard__rating">Insert Rating</div>
        </div>
      </div>
      <div className="dashboard__card__bottom">
        <div className="dashboard__card__quotes">
          Wise spending is part of wise investing, and its never too late to
          start!
        </div>
        <div className="dashboard__card__buttons">
          <div className="profile__card__button profile__button">
            Go To Profile
          </div>
          <div className="profile__card__button message__button">Message</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileListCard;
