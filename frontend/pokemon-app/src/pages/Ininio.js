// src/inicio.js
import React from 'react';
import './Inicio.css'; // Importação do arquivo CSS

const Inicio = () => {
  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/pokemon.jpg`} alt="Pokemon" className="image" />
      <br />
      <button
        onClick={() => window.location.href = '/home'}
        className="button"
      >
        FAZER CHAMADA HTTP 
      </button>
    </div>
  );
};

export default Inicio;
