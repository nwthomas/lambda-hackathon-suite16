import React from "react";
import Profile from "../Profile/Profile";
import VideoChat from "../VideoChat/VideoChat";
import UserCards from "../UserCards/UserCards";

const Dashboard = props => {
  return (
    <div>
      <Profile _id={props._id} profiles={props.profiles} />
      {props.profiles.map(card => (
        <UserCards
          avatar={card.avatar}
          firstname={card.firstname}
          specialty={card.specialty}
          rating={card.rating}
        />
      ))}
      <VideoChat />
    </div>
  );
};

export default Dashboard;

// className={props.loggedinUser ? "video--display" : "display--hidden"}
// name
// specialty

// rating
// profileCat
