import React from "react";

const FollowerCard = (props) => {
  console.log("follower data", props.followers);
  return (
    <div className="follower-cards">
      {props.followers.map((follower) => (
        <div key={follower.id} className="followers">
          <img width="200" src={follower.avatar_url} alt="follower avi" />
          <h5>Github Username: {follower.login}</h5>
          <a href={follower.html_url} alt="follower url">
            Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default FollowerCard;
