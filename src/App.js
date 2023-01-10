import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { getPokemonData, getPokemons } from "./components/api";
import Navbar from "./components/navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
