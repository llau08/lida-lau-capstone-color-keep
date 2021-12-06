import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { apiURL } from "../../utils/utils";
import FileUpload from "../FileUpload/FileUpload";

function Edit({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [publicId, setPublicId] = useState("");
  function actionModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  const editClient = (event) => {
    event.preventDefault();
    let editedClient = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      stylist: event.target.stylist.value,
      dateVisited: event.target.dateVisited.value,
      image: publicId,
    };

    axios
      .patch(`${apiURL}profile/${id}`, editedClient)
      .then((res) => {
        console.log(res);
        alert("Please double check your changes before saving");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={actionModal}>Edit</button>
      <Modal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false}>
        <button onClick={closeModal}>close</button>
        <form onSubmit={editClient}>
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
          <input type="submit" value="Save Client" />
          <FileUpload setPublicId={setPublicId} publicId={publicId} />
        </form>
      </Modal>
    </div>
  );
}
export default Edit;
