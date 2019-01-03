import React from "react";
import "./ProfileCard.css";

const ProfileCardTitle = props => {
  return (
    <div className="profile__card__title">
      <p className="title__text">{props.profileName}</p>
      <p className="title__text">{props.profileCat}</p>
    </div>
  );
};

export default ProfileCardTitle;
