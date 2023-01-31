import { useState } from "react";
import "./ListItem.css";
import SingleFlagInfo from "./SingleFlagInfo";
import Modal from "react-modal/lib/components/Modal";

const ListItem = ({ country, addToBasket, handleItemClick }) => {
  const [openModal, setOpenModal] = useState(false);

  function modalIsOpen() {
    setOpenModal(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <li onClick={() => setOpenModal(true)}>
        <img src={country.flags.svg} alt={country.name.common + " flag"} />
      </li>
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <SingleFlagInfo country={country}></SingleFlagInfo>
      </Modal>
    </>
  );
};

export default ListItem;
