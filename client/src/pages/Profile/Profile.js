import axios from "axios";
import { apiURL } from "../../utils/utils";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Profile/Profile.scss";

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
      <main className="all-profiles">
        <input
          className="all-profiles__search"
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        {this.state.profileList
          .filter((profile) =>
            profile.firstName.toLowerCase().includes(this.state.singleProfile)
          )
          .map((profile, i) => {
            return (
              <div key={i} className="all-profiles__box">
                <Link to={`profile/${profile.id}`}>
                  <h1 className="all-profiles__name">
                    {profile.firstName} {profile.lastName}
                  </h1>
                </Link>
              </div>
            );
          })}
        <Link to="/home" className="all-profiles__previous">
          PREVIOUS
        </Link>
      </main>
    );
  }
}
export default Profile;
