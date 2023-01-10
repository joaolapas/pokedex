import React, { useState } from "react";

const ModalCard = (props) => {
  const { pokemon, fav, favorite, typeColor } = props;
  const nameUppercase = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  
  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="modal-img-container">
          <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated'].front_default} />
          <div className="heart" onClick={fav}>{favorite?'❤️':'🤍'}</div>
        </div>
        <div className="modal-card-top">
          <div className="modal-card-name">
            <img
              alt="pokeball"
              src="https://i.pinimg.com/564x/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.jpg"
            />
            <h3>{nameUppercase}</h3>
          </div>
          <div className="modal-card-id">#{pokemon.id}</div>
        </div>

        <div className="modal-card-bottom">
          <div className="modal-card-types">
            {pokemon.types.map((type, key) => {
              return (
                <div className="type-box" key={key} style={{background:`${typeColor}`}}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
