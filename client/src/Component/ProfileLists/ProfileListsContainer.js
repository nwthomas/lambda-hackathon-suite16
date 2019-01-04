import React from "react";
import "./ProfileLists.css";
import ProfileListCard from "../ProfileLists/ProfileListCard";

const ProfileListsContainer = props => {
  const target = props.profiles.filter(profile => profile._id === props._id)[0];

  if (target &&! props.hasSetRole) {
    props.updateSearchableProfiles(target.role);
  }

  // props.searchableProfiles = props.profiles.filter(profile => {
  //   return profile.role !== target.role;
  //   return 1;
  // });


  // console.log(props.searchableProfiles);

  return !target ? (
    ""
  ) : (
    
/// Master
    <React.Fragment>
      <div className="profile-lists__search">
        <span className="profile-lists__search__label">{target.role === "advisee" ? "Search advisors:" : "Search advisees:"}</span>
        <input
          className="profile-lists__search__input"
          name="profile-searchbar"
          type="search"
          placeholder="&#61442;"
          onChange={props.handleChange}
// =============
  return (
    <div className="profile-lists__container">
      {displayProfilesArr.map((card, index) => (
        <ProfileListCard
          key={"card" + index}
          avatar={card.avatar}
          role={card.role}
          firstname={card.firstname}
          specialty={card.specialty}
          rating={card.rating}
          _id={card._id}
          stars={props.stars}
// Master
        />
      </div>
      <div className="profile-lists__container">
        {props.searchableProfiles.map((card, index) => (
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
