import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: auto;
  width: 40%;
  height: 50%;
  text-align: center;
  background-color: black;
  color: white;
`;

const UserCard = (props) => {
  console.log("user data", props);
  return (
    <div className="user-cards">
      {props.users.map((user) => (
        <WrapperDiv key={user.id} className="user">
          <img width="200" src={user.avatar_url} alt="user avi" />
          <h3>Github Username: {user.login}</h3>

          <a href={user.html_url}>Profile</a>

          <p>Biography: {user.bio}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </WrapperDiv>
      ))}
    </div>
  );
};

export default UserCard;
