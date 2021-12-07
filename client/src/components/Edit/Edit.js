import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { apiURL } from "../../utils/utils";
import FileUpload from "../FileUpload/FileUpload";
import { useHistory } from "react-router-dom";
import "../Edit/Edit.scss";

function Edit({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [publicId, setPublicId] = useState("");
  function actionModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  let history = useHistory();
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="change">
      <button className="change__btn" onClick={actionModal}>
        Edit
      </button>
      <Modal
        className="change__modal"
        isOpen={openModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button className="change__btn" onClick={closeModal}>
          close
        </button>
        <form className="change__form" onSubmit={editClient}>
          <FileUpload setPublicId={setPublicId} publicId={publicId} />
          <label>First Name</label>
          <input className="change__input" type="text" name="firstName"></input>
          <label>Last Name</label>
          <input className="change__input" type="text" name="lastName"></input>
          <label>Phone Number</label>
          <input className="change__input" type="text" name="phone"></input>
          <label>Email</label>
          <input className="change__input" type="text" name="email"></input>
          <label>Preferred Stylist</label>
          <input className="change__input" type="text" name="stylist"></input>
          <label>Date Visited</label>
          <input
            className="change__input"
            type="date"
            name="dateVisited"
          ></input>
          <input className="change__btn--save" type="submit" value="SAVE" />
        </form>
      </Modal>
    </div>
  );
}
export default Edit;
