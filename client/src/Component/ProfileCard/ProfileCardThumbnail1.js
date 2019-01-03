import React from "react";
import profileThumbnail from "../ProfileCard/profileCardImg/thumbnail.jpg";
import "./ProfileCard.css";

const ProfileCardThumbnail1 = props => {
  return (
    <div className="profile__card__avatar">
      <img
        src={profileThumbnail}
        alt="User thumbnail"
        className="profile__card__avatar"
      />
    </div>
  );
};

export default ProfileCardThumbnail1;
