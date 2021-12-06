import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Delete from "../../components/Delete/Delete";
import Edit from "../../components/Edit/Edit";
import { apiURL } from "../../utils/utils";
import { Link } from "react-router-dom";

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
      alert(`"This profile ${profile.firstName}will be deleted"`);
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
    <>
      <h1>{profile.firstName}</h1>
      <h1>{profile.lastName}</h1>
      <p>{profile.phone}</p>
      <p>{profile.email}</p>
      <h3>{profile.stylist}</h3>
      <p>{profile.dateVisited}</p>
      <img
        src={`https://res.cloudinary.com/dee8ga7np/image/upload/${profile.image}`}
        alt="hairstyle"
        style={{ width: 200 }}
        cloudName="dee8ga7np"
      />
      <Edit id={id} />
      <Delete deleteProfile={deleteProfile} />
      <Link to="/profile">Go Back</Link>
    </>
  );
}
export default IndvProfile;
