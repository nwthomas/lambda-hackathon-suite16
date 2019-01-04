import React from "react";
import "./ProfileLists.css";
import ProfileListCard from "../ProfileLists/ProfileListCard";

const ProfileListsContainer = props => {
  const target = props.profiles.filter(profile => profile._id === props._id)[0];

  const displayProfilesArr = props.profiles.filter(profile => {
    return profile.role !== target.role;
  });

  console.log(displayProfilesArr);

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
        />
      ))}
    </div>
  );
};

export default ProfileListsContainer;
