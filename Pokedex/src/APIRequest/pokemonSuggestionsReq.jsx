import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export function usePaginatePokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const responsePokemon = await axios.get(
          `${API_URL}/pokemon?limit=1224&offset=0`
        );
        setPokemonData(responsePokemon.data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }

    fetchPokemon();
  }, []);

  return { pokemonData, isLoading, error };
}

export default usePaginatePokemon;
