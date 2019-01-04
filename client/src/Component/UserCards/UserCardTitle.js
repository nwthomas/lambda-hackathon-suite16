import React from "react";
import "./UserCards.css";

const ProfileCardTitle = props => {
  return (
    <div className="profile__card__title">
      <p className="title__text">{props.firstname}</p>
      <p className="title__text">{props.specialty}</p>
    </div>
  );
};

export default ProfileCardTitle;

// name
// specialty

// rating
// profileCat
