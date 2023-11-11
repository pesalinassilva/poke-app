//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

import PokeContext from "./context/PokeContext";
import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import DetallePokemon from './components/DetallePokemon';

function App() {
  const [pokemones, setPokemones] = useState([])
  const [pokemonSelect, setPokemonSelect] = useState('')
  const [pokeDetalle, setPokeDetalle] = useState(null)

  const updatePokemones = (pokemones) => {
    setPokemones(pokemones)
  }

  const updateSelect = (e) => {
    setPokemonSelect(e.target.value);
  }

  const updateDetalle = (detalle) => {
    setPokeDetalle(detalle)
  }

  const getData = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25'
    const response = await fetch (url)
    const data = await response.json()

    const detailsPromises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const dataDetails = await response.json()
        return dataDetails;
    })
    
    const detailsData = await Promise.all(detailsPromises)  

    updatePokemones(detailsData)
}

const globalState = { updatePokemones, pokemones, updateSelect, pokemonSelect, pokeDetalle, updateDetalle}

console.log(pokemones)
useEffect(() => {
    getData()
}, [])

  return (
    <>
      <PokeContext.Provider value={globalState}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemones/' element={<Pokemones/>}/>
            <Route path='/pokemones/:name' element={<DetallePokemon />}/>
          </Routes>
        </BrowserRouter>
      </PokeContext.Provider>
    </>
  )
}

export default App
