import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PokemonCard from '../components/PokemonCard';
import './HomePage.css';

const HomePage = () => {
  const [allPokemons, setAllPokemons] = useState([]); // Lista completa de todos os Pokémon
  const [pokemons, setPokemons] = useState([]); // Lista de Pokémon exibidos após pesquisa
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchPokemons(); // Carrega os Pokémon inicialmente
  }, []);

  const fetchPokemons = (name = '') => {
    const url = name ? `http://localhost:5000/api/pokemons?name=${name}` : 'http://localhost:5000/api/pokemons';
    const headers = {
      'apikey': 'c4f23e09-2069-45a7-bab2-8e87fa5f3d30'
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => {
        setPokemons(data); // Atualiza os Pokémon exibidos após a pesquisa
        if (name === '') {
          setAllPokemons(data); // Atualiza a lista completa apenas se não houver pesquisa
        }
        generateRandomPokemon(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const generateRandomPokemon = (pokemonList) => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setCurrentPokemon(pokemonList[randomIndex]);
    setIsFavorite(favorites.some(pokemon => pokemon.id === pokemonList[randomIndex].id));
  };

  const handleSearch = () => {
    fetchPokemons(searchTerm);
  };

  const handleFavorite = () => {
    if (currentPokemon && !favorites.some(pokemon => pokemon.id === currentPokemon.id)) {
      setFavorites([...favorites, currentPokemon]);
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter(pokemon => pokemon.id !== currentPokemon.id);
      setFavorites(updatedFavorites);
      setIsFavorite(false);
    }
  };

  const handleSearchInputBlur = () => {
    if (searchTerm.trim() === '') {
      setSearchTerm('');
    }
  };

  return (
    <div className="app">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={handleSearchInputBlur}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {currentPokemon && <PokemonCard pokemon={currentPokemon} />}
      <div className="button-container">
        <button onClick={() => generateRandomPokemon(allPokemons)}>Gerar outro Pokémon</button>
        <button className="favorite-button" onClick={handleFavorite}>
          <FontAwesomeIcon icon={isFavorite ? faHeart : faHeart} style={{ color: isFavorite ? 'red' : 'white' }} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
