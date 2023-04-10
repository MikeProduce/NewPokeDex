import React, { useMemo, useCallback, useEffect } from "react";
import { usePaginatePokemon } from "../APIRequest/pokemonSuggestionsReq";

export const SearchBarSuggestions = ({ value, setValue }) => {
  const { pokemonData, isLoading, error } = usePaginatePokemon();
  const filteredpokemonData = useMemo(() => {
    if (pokemonData) {
      const searchTerm = value.toLowerCase();
      return pokemonData.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchTerm) &&
          pokemon.name !== searchTerm
      );
    }
    return [];
  }, [pokemonData, value]);
  //note while the useMemo here might not be the most optimal for smaller sets of pokemonData
  //this would be an example and if we had a large pokemonData set this would be optimal for preformance since
  //it would memoize the results and not have to recalculate everytime unless pokemonData or value change.
  //also useMemo returns a memoized value that is expensive to compute

  const handleSearch = useCallback(
    (searchTerm) => {
      setValue(searchTerm);
    },
    [setValue]
  );
  //useCallback returns a memoized function.
  //should be used when functions are passed down to a child compoenent or if the function runs many times.
  return (
    <div
      className={`absolute bg-gray-900 top-full left-0 right-0 shadow-lg rounded-md overflow-hidden mt-1 ${
        value === "" ? "hidden" : "block"
      }`}
    >
      <ul>
        {filteredpokemonData.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => handleSearch(pokemon.name)}
            className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarSuggestions;
//questioning about useMemo and useCallback in the search function
