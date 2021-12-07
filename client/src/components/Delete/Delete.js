import "../Delete/Delete.scss";
import { useState } from "react";
import Modal from "react-modal";

function Delete({ deleteProfile }) {
  const [openModal, setOpenModal] = useState(false);

  function actionModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div className="delete">
      <button className="delete__btn" onClick={actionModal}>
        DELETE
      </button>
      <Modal
        className="delete__modal"
        isOpen={openModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button className="delete__btn" onClick={closeModal}>
          close
        </button>
        <h1 className="delete__txt">
          Are you sure you want to delete this profile?
        </h1>
        <button
          className="delete__btn"
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
