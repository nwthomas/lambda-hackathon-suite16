import React from "react";
import "./ProfileCard.css";

const ProfileCardTitle = props => {
  return (
    <div className="profile__card__title">
      <p classname="title__text profile__card__name">{props.profileName}</p>
      <p classname="title__text">{props.profileCat}</p>
    </div>
  );
};

export default ProfileCardTitle;
