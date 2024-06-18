const cors = require('cors');
const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para processar JSON
app.use(express.json());

app.use(cors());

// Rotas
app.use('/api/pokemons', pokemonRoutes);


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
