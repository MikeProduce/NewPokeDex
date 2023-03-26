import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export function useSinglePokemonAPI(pokemonId) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/pokemon/${pokemonId}`);
        setPokemon(response.data);
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
