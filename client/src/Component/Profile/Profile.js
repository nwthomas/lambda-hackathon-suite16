import React from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";

const Profile = props => {
  const target = props.profiles.filter(profile => profile._id === props._id)[0];

  const formatDate = date => {
    if (date.match(/\d\d\d\d-\d\d-\d\d/)) {
      const dateParts = date.split("-");
      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return `${monthNames[+month - 1]} ${day}, ${year}`;
    } else {
      return "[INVALID DATE VALUE]";
    }
  };

  return !target ? (
    ""
  ) : (
    <div className="profile-container">
      <h2 className="profile__heading">Profile</h2>
      <NavLink
        className="profile__edit-link"
        to="/edit"
      >
        Edit Account Info
      </NavLink>
      <div className="profile__data">
        <div className="profile__data__left">
          <div className="profile__data__left__avatar">
            <img src={target.avatar} alt={`${target.username}'s avatar`} />
          </div>
          <span className="profile__data__left__rating">
            Rating: {target.rating}
          </span>
        </div>
        <div className="profile__data__right">
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Username:{" "}
            </span>
            <span className="profile__data__right__field__value">
              {target.username}
            </span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Full name:{" "}
            </span>
            <span className="profile__data__right__field__value">{`${
              target.lastname
            }, ${target.firstname}`}</span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Email address:{" "}
            </span>
            <span className="profile__data__right__field__value">
              {target.email}
            </span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Date of birth:{" "}
            </span>
            <span className="profile__data__right__field__value">
              {formatDate(target.dob)}
            </span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Location:{" "}
            </span>
            <span className="profile__data__right__field__value">
              {target.location}
            </span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              Credentials:{" "}
            </span>
            <span className="profile__data__right__field__value">
              {target.creds}
            </span>
          </div>
          <div className="profile__data__right__field">
            <span className="profile__data__right__field__label">
              User type:
            </span>
            <span className="profile__data__right__field__value">
              {target.role === "advisee" ? "Advisee" : `Advisor (${target.specialty || "specialty pending"})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
