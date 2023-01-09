import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { getPokemons } from "./components/api";
import Navbar from "./components/navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      setPokemons(result);
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
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;
