const { fetchData } = require('../provider/axiosRequest');

let urlPokemon = 'https://dev-api-teste.mandarin.com.br/pokemons';

const getPokemons = async (req, res) => {
  const { name } = req.query;
  console.log("init controller")
  console.log("teste name" , name)
  if (name) {
    urlPokemon += `?name=${name}`;
  }

  try {
    const response = await fetchData(name); 
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar pokémons:', error);
    res.status(500).json({ error: 'Erro ao buscar pokémons' });
  }
};

module.exports = {
  getPokemons,
};
