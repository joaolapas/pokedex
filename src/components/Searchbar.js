import React, { useState } from "react";
import "../App.css";
import {searchPokemon} from "./api"

const Searchbar = () => {
    const [search, setSearch] = useState('pikachu')
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const clickHandler = () => {
        onSearch(search)
    }

    const onSearch = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder='Search Pokémon' onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn"> 
                <button onClick={clickHandler}>Search</button>
            </div>
            <div>
                {pokemon?
                    <div>
                    <img src={pokemon.sprites.front_default}/>
                    <div>{pokemon.name}</div>
                    </div>:null
                
                }
            
            </div>
        </div>
    )
}
export default Searchbar