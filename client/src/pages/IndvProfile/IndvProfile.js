import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../utils/utils";

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
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <>
      <h1>{profile.firstName}</h1>
      <h1>{profile.lastName}</h1>
      <p>{profile.phone}</p>
      <p>{profile.email}</p>
      <h3>{profile.stylist}</h3>
      <p>{profile.dateVisited}</p>
    </>
  );
}
export default IndvProfile;
