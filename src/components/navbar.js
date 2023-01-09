import React from "react";
import "../App.css";

const Navbar = () => {
  const pokedexLogo =
    "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png";
  return (
    <nav>
      <div>
        <img 
            src={pokedexLogo} 
            alt="Pokedex-logo" 
            className="navbar-img" 
        />
      </div>
    </nav>
  );
};

export default Navbar;
