import React from "react";
import "./ProfileLists.css";

const ProfileListsContainer = props => {
  const target = props.profiles.filter(profile => profile._id === props._id)[0];
  console.log(target);
  return (
    <div className="profile-lists__container">
      {console.log(
        props.profiles.filter(profile => {
          if (target.role === "advisee") {
            return profile.role === "advisor";
          } else if (target.role === "advisor") {
            return profile.role === "advisee";
          } else {
            return null;
          }
        })
      )}
    </div>
  );
};

export default ProfileListsContainer;
