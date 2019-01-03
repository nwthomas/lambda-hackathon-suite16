import React from "react";
import "./VideoChat.css";

const VideoChat = props => {
  return (
    <div className="video__container">
      <iframe
        className="video__display"
        src="https://tokbox.com/embed/embed/ot-embed.js?embedId=9aad96ab-1297-4431-bd6a-b787c7cb14e0&room=DEFAULT_ROOM&iframe=true"
        allow="microphone; camera"
        scrolling="no"
      />
    </div>
  );
};

export default VideoChat;
