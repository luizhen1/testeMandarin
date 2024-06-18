// src/components/PokemonCard.js
import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
    <div className="pokemon-card" style={{ backgroundImage: `url(${pokemon.background_image_url})` }}>
      <img src={pokemon.image_url} alt={pokemon.name} className="pokemon-image" />
    </div>
    <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p>{pokemon.category}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
