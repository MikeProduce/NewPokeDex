import React, { useState, useEffect } from 'react';

export const PokemonAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/ability/1/');
    const json = await response.json();
    setData(json.results);
  }
  console.log(data);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default PokemonAPI;

