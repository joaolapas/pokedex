import React from "react";

const ModalCard = (props) => {
  const { pokemon } = props;
  return (
    <div className="modal-container">
      <div className="modal-card">
        <img src={pokemon.sprites.front_default} />
        <div className="modal-card-top">
          <div className="modal-card-name">
            <img alt='pokeball' src='https://i.pinimg.com/564x/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.jpg' />
            <h3>{pokemon.name}</h3>
          </div>
          <div className="modal-card-id">#{pokemon.id}</div>
        </div>

        
        <div className="modal-card-bottom">
          <div className="modal-card-types">
            {pokemon.types.map((type, key) => {
              return (
                <div className="type-box" key={key}>
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
