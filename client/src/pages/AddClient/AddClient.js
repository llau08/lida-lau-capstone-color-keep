import axios from "axios";
import FileUpload from "../../components/FileUpload/FileUpload";
import { apiURL } from "../../utils/utils";
import "../AddClient/AddClient.scss";

function AddClient({ history }) {
  const addNewClient = (event) => {
    event.preventDefault();
    let newProfile = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      stylist: event.target.stylist.value,
      dateVisited: event.target.dateVisited.value,
    };

    axios
      .post(`${apiURL}profiles`, newProfile)
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
      <FileUpload />
      <form className="add" onSubmit={addNewClient}>
        <label>First Name</label>
        <input type="text" name="firstName"></input>
        <label>Last Name</label>
        <input type="text" name="lastName"></input>
        <label>Phone Number</label>
        <input type="text" name="phone"></input>
        <label>Email</label>
        <input type="text" name="email"></input>
        <label>Preferred Stylist</label>
        <input type="text" name="stylist"></input>
        <label>Date Visited</label>
        <input type="date" name="dateVisited"></input>
        <input type="submit" value="Add Client" />
      </form>
    </>
  );
}

export default AddClient;
