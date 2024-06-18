const axios = require('axios');
const urlPokemon = "https://dev-api-teste.mandarin.com.br/pokemons"


async function fetchData(name) {
    try {

       let response

      if (!name) {
        response = await axios.get(urlPokemon);

      }else{
        response = await axios.get(urlPokemon+`?name=${name}`);

      }

      console.log(response.data);

      return response
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  module.exports = { fetchData };