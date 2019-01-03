import React from "react";
import "./ProfileCard.css";

const ProfileCardBtn = props => {
  return (
    <div className="profile__button__container">
      <p className="profile__card__review">{props.review}</p>
      <div className="button__section">
        <button className="profile__button profile__card__button">
          Go To Profile
        </button>
        <br />
        <button className="message__button profile__card__button">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCardBtn;
