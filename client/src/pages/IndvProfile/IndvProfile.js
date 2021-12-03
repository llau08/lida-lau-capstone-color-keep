import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Delete from "../../components/Delete/Delete";
import Edit from "../../components/Edit/Edit";
import { apiURL } from "../../utils/utils";

function IndvProfile(props) {
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
      history.push("/profiles");
    });
  };

  useEffect(() => {
    let isMounted = true;
    axios.get(`${apiURL}profile/${id}`).then((res) => {
      if (isMounted) setProfile(res.data[0]);
    });
    return () => {
      isMounted = false;
    };
  }, [getProfile]);

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
        style={{ width: 200 }}
        cloudName="dee8ga7np"
      />
      <Edit />
      <Delete deleteProfile={deleteProfile} />
    </>
  );
}
export default IndvProfile;
