import axios from "axios";
import { apiURL } from "../../utils/utils";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Delete/Delete";

class Profile extends Component {
  state = {
    profileList: null,
  };

  componentDidMount() {
    axios.get(`${apiURL}profile`).then((res) => {
      this.setState({ profileList: res.data });
    });
  }

  render() {
    if (this.state.profileList === null) {
      return <h1>Loading...</h1>;
    }
    return this.state.profileList.map((profile) => {
      return (
        <>
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
        </>
      );
    });
  }
}
export default Profile;
