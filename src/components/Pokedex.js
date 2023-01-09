import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
 
  return (
    <div className="pokedex-container">
      <div className="pokedex-pagina">paginação</div>
      {loading ? <div>Carregando</div> : <div className="pokedex-grid">
        {pokemons && pokemons.map((pokemon, index)=>{
            return(
                <Pokemon pokemon ={pokemon} key={index} />
            )
        })}
      </div>}
    </div>
  );
};

export default Pokedex;
