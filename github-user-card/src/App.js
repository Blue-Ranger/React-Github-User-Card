import React from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";
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
      .then((response) => {
        this.setState({
          users: [response.data],
        });

        const data = response.data;
        return data;
      })

      .then((response) => {
        console.log(response);
        axios
          .get(`${response.followers_url}`)
          .then((response) => {
            console.log(response.data);
            this.setState({
              followers: [...response.data],
            });
          })

          .catch((error) => {
            console.log("error follower msg", error);
          });
      })

      .catch((error) => {
        console.log("error msg", error);
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
          <h1>Followers</h1>
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
