import React from "react";

import "./UserCards.css";

const UserCardThumbnail = props => {
  return (
    <div className="profile__card__avatar">
      <img
        src={props.avatar}
        alt="User thumbnail"
        className="profile__card__avatar"
      />
    </div>
  );
};

export default UserCardThumbnail;
