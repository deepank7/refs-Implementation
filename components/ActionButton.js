import React, { useRef, useState } from "react";
import Modal from "react-modal";
import InputModal from "./InputModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ActionButton = ({ label, action }) => {
  const buttonRef = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} ref={buttonRef}>
        Get Ready to see a ref
      </button>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <button onClick={() => setIsOpen(false)}>X</button>
          <InputModal />
        </Modal>
      )}
    </>
  );
};
export default ActionButton;
