import React from "react";
import "./ProfileLists.css";
import ProfileListCard from "../ProfileLists/ProfileListCard";

const ProfileListsContainer = props => {
  const target = props.profiles.filter(profile => profile._id === props._id)[0];

  const displayProfilesArr = props.profiles.filter(profile => {
    return profile.role !== target.role;
  });

  console.log(displayProfilesArr);

  return !target ? (
    ""
  ) : (
    <React.Fragment>
      <div className="profile-lists__search">
        <span className="profile-lists__search__label">{target.role === "advisee" ? "Search advisors:" : "Search advisees:"}</span>
        <input
          className="profile-lists__search__input"
          type="search"
          placeholder="&#61442;"
        />
      </div>
      <div className="profile-lists__container">
        {displayProfilesArr.map((card, index) => (
          <ProfileListCard
            key={"card" + index}
            avatar={card.avatar}
            firstname={card.firstname}
            specialty={card.specialty}
            rating={card.rating}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProfileListsContainer;
