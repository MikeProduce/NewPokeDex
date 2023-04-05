import { useState, useEffect } from "react";
import axios from "axios";

const CACHE_KEY = "pokemon_data";

export function usePokemonTypeAPI(Type) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      setData(JSON.parse(cachedData));
      return;
    }

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
        const pokemonData = pokemonResponses.map((response) => response.data);
        setData(pokemonData);
        setIsLoading(false);
        console.log(pokemonData);
        localStorage.setItem(CACHE_KEY, JSON.stringify(pokemonData));
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }

    fetchData();
    if (Type === "fire" && data) {
      const firePokemon = data.filter((pokemon) => {
        return pokemon.types[0];
      });
      setData(firePokemon);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export default usePokemonTypeAPI;
