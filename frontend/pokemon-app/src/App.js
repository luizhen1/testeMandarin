import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import Inicio from "./pages/Ininio";

function App () {

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>} />
    <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App