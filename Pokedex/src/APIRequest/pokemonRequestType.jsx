import { useState, useEffect } from "react";
import axios from "axios";

export function usePokemonTypeAPI(Type) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const pokemonPromises = [];
        for (let i = 1; i <= 150; i++) {
          pokemonPromises.push(
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          );
        }
        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemonData = pokemonResponses
          .map((response) => response.data)
          .filter((pokemon) => {
            return pokemon.types.some(
              (type) => type.type.name === Type.toLowerCase()
            );
          });
        console.log(pokemonData);
        setData(pokemonData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }

    fetchData();
  }, [Type]);

  return {
    data,
    isLoading,
    error,
  };
}

export default usePokemonTypeAPI;
