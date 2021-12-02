import "../Delete/Delete.scss";
import { useState } from "react";

function DeleteModal() {
  const [DeleteModal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!DeleteModal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Delete
      </button>
      {DeleteModal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p>Delete</p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default DeleteModal;
