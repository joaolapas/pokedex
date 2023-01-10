import Modal from "react-modal";
import React, { useState } from "react";
import ModalCard from "./ModalCard";

Modal.setAppElement("#root");

const Pokemon = (props) => {
  const { pokemon } = props;
  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: 'none'
    },
  };

  const triggerModal = () => setShowModal(!showModal);
  return (
    <div className="pokemon-card" onClick={triggerModal}>
      <img src={pokemon.sprites.front_default} />
      <div>
        #{pokemon.id} - {pokemon.name}
      </div>
      <Modal style={customStyles} isOpen={showModal}>
        <ModalCard className="modal" pokemon={pokemon} />
        <button onClick={triggerModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Pokemon;
