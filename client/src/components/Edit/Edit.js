import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { apiURL } from "../../utils/utils";

function Edit() {
  const [openModal, setOpenModal] = useState(false);

  function actionModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <button onClick={actionModal}>Edit</button>
      <Modal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false}>
        <button onClick={closeModal}>close</button>
        <form>
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
        </form>
      </Modal>
    </div>
  );
}
export default Edit;
