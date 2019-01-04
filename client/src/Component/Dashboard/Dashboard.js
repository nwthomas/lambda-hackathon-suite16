import React from "react";
import Profile from "../Profile/Profile";
import VideoChat from "../VideoChat/VideoChat";
import ProfileListsContainer from "../ProfileLists/ProfileListsContainer";

const Dashboard = props => {
  return (
    <div>
      <Profile _id={props._id} profiles={props.profiles} />
      <ProfileListsContainer _id={props._id} profiles={props.profiles} />
      <VideoChat />
    </div>
  );
};

export default Dashboard;