import axios from "axios";
import FileUpload from "../../components/FileUpload/FileUpload";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiURL } from "../../utils/utils";
import "../AddClient/AddClient.scss";

function AddClient({ history }) {
  const [publicId, setPublicId] = useState("");
  const addNewClient = (event) => {
    event.preventDefault();
    let newProfile = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      stylist: event.target.stylist.value,
      dateVisited: event.target.dateVisited.value,
      image: publicId,
    };
    console.log(newProfile);
    axios
      .post(`${apiURL}profile`, newProfile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/home");
  };

  return (
    <>
      <FileUpload setPublicId={setPublicId} publicId={publicId} />
      <form className="add" onSubmit={addNewClient}>
        <label className="add__lbl">First Name</label>
        <input type="text" className="add__input" name="firstName"></input>

        <label className="add__lbl">Last Name</label>
        <input type="text" className="add__input" name="lastName"></input>

        <label className="add__lbl">Phone Number</label>
        <input type="text" className="add__input" name="phone"></input>

        <label className="add__lbl">Email</label>
        <input type="text" className="add__input" name="email"></input>

        <label className="add__lbl">Preferred Stylist</label>
        <input type="text" className="add__input" name="stylist"></input>

        <label className="add__lbl">Date Visited</label>
        <input type="date" className="add__input" name="dateVisited"></input>

        <input type="submit" className="add__btn" value="Add Client" />
      </form>

      <Link to="/home" className="add__previous">
        PREVIOUS
      </Link>
    </>
  );
}

export default AddClient;
