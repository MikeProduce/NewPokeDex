import React from "react"
import PokemonAPI from "./APIRequest/pokemonRequest"

function App() {


  return (
    <div className="App">
      <div className='bg-black text-white p-4'>Pokemon database</div>
      <PokemonAPI/>
    </div>
  )
}

export default App
