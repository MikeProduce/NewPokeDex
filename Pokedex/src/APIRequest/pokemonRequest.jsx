import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonAPI = ({nums}) => {
  const [data, setData] = useState();

  useEffect(() => {
        fetchData();
  }, [nums]);

  async function fetchData() {  // defines an async function named "fetchData"
    try {  // starts a try-catch block for error handling
      const pokemonPromises = [];  // creates an empty array named "pokemonPromises"
      for (let i = 1; i <= nums; i++) {  // loops through the numbers 1 to 15
        pokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));  // sends an HTTP GET request to the PokeAPI for each number and pushes the resulting promise to "pokemonPromises"
      }
      const pokemonResponses = await Promise.all(pokemonPromises);  // waits for all the promises in "pokemonPromises" to resolve and returns an array of their results, which is assigned to "pokemonResponses"
      const pokemonData = pokemonResponses.map(response => response.data);  // creates an array of Pokemon data objects by mapping over "pokemonResponses" and extracting the "data" property from each response
      setData(pokemonData);// updates the component's state with the array of Pokemon data objects
      console.log(pokemonData);
    } catch (error) {  // handles any errors thrown within the try block
      console.error(error);  // logs the error to the console
      setData(null);  // sets the component's state to null to indicate an error
    }
  }




  return (
    <div className='lg:mx-20 mx-0'>
      {data ? (
        <ul className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 object-cover'>
          {data.map((pokemon) => (
            <li className='border-2 border-black mt-5 mx-2 py-2' key={pokemon.id}>
                <img className='mx-auto w-64 h-64 md:h-72 md:h-72 object-contain' src={pokemon.sprites.front_default} alt="" />
                <p className='text-xl'>name: {pokemon.id} {pokemon.name}</p>
                <div className='flex justify-center'>
                  <p className='mx-2'>type: {pokemon.types[0]?.type.name}</p>
                  <p className='mx-2'>{pokemon.types[1]?.type.name}</p>
                </div>
                <button>More Information</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  ); 
}

export default PokemonAPI;

