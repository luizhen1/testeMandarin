const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const {authenticate} = require('../middlewares/auth')

// Rota para buscar pokemons
router.get('/', authenticate,pokemonController.getPokemons);

module.exports = router;
