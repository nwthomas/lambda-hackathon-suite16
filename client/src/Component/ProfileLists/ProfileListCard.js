import React from "react";
import "./ProfileLists.css";
import Rating from "../Rating/Rating";

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

          {props.role !== "advisee" ? (
            <div className="dashboard__rating">
              <p className="dashboard__rating__num">
                Rating: {Math.round(props.rating * 100) / 100}
              </p>
            </div>
          ) : null}
          {props.role !== "advisee" ? (
            <div className="rating__container">
              <Rating
                className="dashboard__rating__star"
                _id={props._id}
                stars={props.stars}
              />
            </div>
          ) : null}
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
