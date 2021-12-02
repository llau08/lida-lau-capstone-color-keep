import "../Delete/Delete.scss";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { apiURL } from "../../utils/utils";

function Delete({ deleteProfile }) {
  const [openModal, setOpenModal] = useState(false);

  function actionModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <button onClick={actionModal}>Open Modal</button>
      <Modal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false}>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <button
          onClick={() => {
            deleteProfile();
          }}
        >
          Delete
        </button>
      </Modal>
    </div>
  );
}
export default Delete;
