import axios from "axios";
import FileUpload from "../../components/FileUpload/FileUpload";
import { apiURL } from "../../utils/utils";
import React, { Component, useState } from "react";

class Profile extends Component {
  state = {
    profileList: null,
  };

  componentDidMount() {
    axios.get(`${apiURL}profiles`).then((res) => {
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
          <h1>{profile.firstName}</h1>
          <h1>{profile.lastName}</h1>
          <p>{profile.phone}</p>
          <p>{profile.email}</p>
          <h3>{profile.stylist}</h3>
          <p>{profile.dateVisited}</p>
          <button>Edit</button>
          
          <button>Delete</button>
        </>
      );
    });
  }
}
export default Profile;
