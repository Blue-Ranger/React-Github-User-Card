import React from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowersCard from "./Components/FollowersCard";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Blue-Ranger")
      .then((res) => {
        this.setState({
          users: [users.data],
        }).catch((error) => {
          console.log(error);
        });
      })

      .get("https://api.github.com/users/Blue-Ranger")
      .then((res) => {
        this.setState({
          followers: [followers.data],
        }).catch((error) => {
          console.log(error);
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="something user">
          <UserCard users={this.state.users} />
        </div>

        <div className="something followers">
          <FollowersCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
