import React from "react";
import Profile from "../Profile/Profile";
import VideoChat from "../VideoChat/VideoChat";

const Dashboard = props => {
  return (
    <div>
      <Profile _id={props._id} profiles={props.profiles} />
      <VideoChat
        className={props.loggedinUser ? "video--display" : "display--hidden"}
      />
    </div>
  );
};

export default Dashboard;
