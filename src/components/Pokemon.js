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

  const triggerModal = () => setShowModal((prev)=>!prev);
  const [ favorite, setFavorite ] = useState(false)
  const handleFav = ()=>setFavorite((prev)=>!prev)

  const nameUppercase = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  const colors = {
    fire: '#dc5c2a',
    grass: '#41d54e',
    electric: 'yellow',
    water: 'lightblue',
    ground: 'peru',
    rock: 'gray',
    fairy: '#fceaff',
    poison: 'purple',
    bug: 'lemonchiffon',
    dragon: 'mediumorchid',
    psychic: 'indigo',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5'
  }

  const defineColor = () =>{
    for (let x in colors){
        if (x == pokemon.types[0].type.name){
            return colors[x]
        }
    }
  }
  return (
    <div>
    
    <div className="pokemon-card" onClick={triggerModal} style={{background: `linear-gradient(${defineColor()}, lightgray`}}>
    <div className="grid-heart">{favorite?'❤️':'🤍'}</div>
        <div className="circle"></div>
      <div className="img-container" >
        <img src={pokemon['sprites']['other']['official-artwork'].front_default} />
      </div>
      <div>
        #{pokemon.id} - {nameUppercase}
        
      </div>
      
    </div>
    <Modal style={customStyles} isOpen={showModal} onRequestClose={triggerModal}>
        <ModalCard typeColor={defineColor()}favorite={favorite} fav={handleFav} className="modal" pokemon={pokemon} />
        <button onClick={triggerModal}>Close</button>
    </Modal>
    </div>
  );
};

export default Pokemon;
