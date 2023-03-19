import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonAPI = () => {
  const [data, setData] = useState();

  useEffect(() => {
        fetchData();
  }, []);

  async function fetchData() {  // defines an async function named "fetchData"
    try {  // starts a try-catch block for error handling
      const pokemonPromises = [];  // creates an empty array named "pokemonPromises"
      for (let i = 1; i <= 15; i++) {  // loops through the numbers 1 to 15
        pokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));  // sends an HTTP GET request to the PokeAPI for each number and pushes the resulting promise to "pokemonPromises"
      }
      const pokemonResponses = await Promise.all(pokemonPromises);  // waits for all the promises in "pokemonPromises" to resolve and returns an array of their results, which is assigned to "pokemonResponses"
      const pokemonData = pokemonResponses.map(response => response.data);  // creates an array of Pokemon data objects by mapping over "pokemonResponses" and extracting the "data" property from each response
      console.log(pokemonData);
      setData(pokemonData);  // updates the component's state with the array of Pokemon data objects
    } catch (error) {  // handles any errors thrown within the try block
      console.error(error);  // logs the error to the console
      setData(null);  // sets the component's state to null to indicate an error
    }
  }
  



  return (
    <div>
      {data ? (
        <ul className='text-center'>
          {data.map((pokemon) => (
            <li className='mx-auto' key={pokemon.id}>
                {pokemon.name}
                <img className='mx-auto' src={pokemon.sprites.front_default} alt="" />
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

