import axios from "axios";
import { apiURL } from "../../utils/utils";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Delete/Delete";

class Profile extends Component {
  state = {
    profileList: null,
    singleProfile: "",
  };

  componentDidMount() {
    axios.get(`${apiURL}profile`).then((res) => {
      this.setState({ profileList: res.data });
    });
  }
  handleChange = (event) => {
    this.setState({ singleProfile: event.target.value });
  };
  render() {
    if (this.state.profileList === null) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        {this.state.profileList
          .filter((profile) =>
            profile.firstName.toLowerCase().includes(this.state.singleProfile)
          )
          .map((profile) => {
            return (
              <div>
                <Link to={`profile/${profile.id}`}>
                  <h1>
                    {profile.firstName}
                    {profile.lastName}
                  </h1>
                  <p>{profile.phone}</p>
                  <p>{profile.email}</p>
                  <h3>{profile.stylist}</h3>
                  <p>{profile.dateVisited}</p>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
export default Profile;
