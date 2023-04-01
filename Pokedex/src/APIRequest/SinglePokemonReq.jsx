import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export function useSinglePokemonAPI(pokemonId) {
  const [pokemon, setPokemon] = useState(null);
  // const [pokemonEvolution, setPokemonEvolution] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const responsePokemon = await axios.get(
          `${API_URL}/pokemon/${pokemonId}`
        );
        // const responsePokemonEvolution = await axios.get(`${API_URL}/evolution-chain/${pokemonId}`);
        setPokemon(responsePokemon.data);
        // setPokemonEvolution(responsePokemonEvolution.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }

    fetchPokemon();
  }, [pokemonId]);

  return { pokemon, isLoading, error };
}

export default useSinglePokemonAPI;
