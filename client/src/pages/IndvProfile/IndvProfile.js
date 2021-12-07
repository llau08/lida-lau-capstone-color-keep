import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Delete from "../../components/Delete/Delete";
import Edit from "../../components/Edit/Edit";
import { apiURL } from "../../utils/utils";
import { Link } from "react-router-dom";
import "../IndvProfile/IndvProfile.scss";

function IndvProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const getProfile = () => {
    axios
      .get(`${apiURL}profile/${id}`)
      .then((res) => {
        setProfile(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let history = useHistory();
  const deleteProfile = () => {
    axios.delete(`${apiURL}profile/${id}`).then((res) => {
      console.log(res);
      alert(`"This profile ${profile.firstName} will be deleted"`);
      history.push("/profile");
    });
  };

  useEffect(() => {
    let isMounted = true;
    axios.get(`${apiURL}profile/${id}`).then((res) => {
      console.log(res.data[0]);
      if (isMounted) setProfile(res.data[0]);
    });
    return () => {
      isMounted = false;
    };
  }, [setProfile]);

  return (
    <ul className="info">
      <li>
        <h1>
          {profile.firstName} {profile.lastName}
        </h1>
      </li>
      <li>
        <h4>Phone: {profile.phone}</h4>
      </li>
      <li>
        <h4>Email: {profile.email}</h4>
      </li>
      <li>
        <h4>Preferred Stylist: {profile.stylist}</h4>
      </li>
      <li>
        <h4>{profile.dateVisited}</h4>
      </li>
      <li>
        <img
          src={`https://res.cloudinary.com/dxxh6kd2m/image/upload/${profile.image}`}
          alt="hairstyle"
          style={{ width: 200 }}
          cloudName="dxxh6kd2m"
        />
      </li>
      <Edit id={id} />
      <Delete deleteProfile={deleteProfile} />
      <Link className="info__previous" to="/profile">
        PREVIOUS
      </Link>
    </ul>
  );
}
export default IndvProfile;
