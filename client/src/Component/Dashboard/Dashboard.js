import React from "react";
import Profile from "../Profile/Profile";

const Dashboard = props => {
  return (
    <div>
      <Profile _id={props._id} profiles={props.profiles}/>
    </div>
  );
};

export default Dashboard;
