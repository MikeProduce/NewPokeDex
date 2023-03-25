import React from "react"
import PokemonPage from "./pages/PokemonPage.jsx"
import { Outlet,Link } from "react-router-dom";
import { usePokemonAPI } from './APIRequest/pokemonRequest';
import IndividualPokemon from "./pages/IndividualPokemon.jsx";


function App() {
  // const {data,isLoading,error} = usePokemonAPI(100);

  return (
    <div className="App font-display">
      <div className='bg-black text-white p-4'>Pokemon database</div>
      <Outlet />
    </div>
  )
}

export default App
