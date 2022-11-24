import React from "react";
import { ModalBody, ModalContainer, ModalFooter, ModalHead, ModalWraper } from "./ModalStyle";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalWraper>
        <ModalHead>
          <h3>Add new Folder</h3>
          <button>❌</button>
        </ModalHead>
        <ModalBody>
          <input type="text" placeholder="Folder name" />
        </ModalBody>
        <ModalFooter>
          <button>➕Create</button>
          <button> ✖ Cancel</button>
        </ModalFooter>
      </ModalWraper>
    </ModalContainer>
  );
};

export default Modal;
