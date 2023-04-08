import React, { useMemo, useCallback, useEffect } from "react";
import { usePokemonAPI } from "../APIRequest/pokemonRequest";

export const SearchBarSuggestions = ({ value, setValue }) => {
  const { data } = usePokemonAPI(150);

  const filteredData = useMemo(() => {
    if (data) {
      const searchTerm = value.toLowerCase();
      return data.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchTerm) &&
          pokemon.name !== searchTerm
      );
    }
    return [];
  }, [data, value]);
  //note while the useMemo here might not be the most optimal for smaller sets of data
  //this would be an example and if we had a large data set this would be optimal for preformance since
  //it would memoize the results and not have to recalculate everytime unless data or value change.
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
        {filteredData.map((pokemon) => (
          <li
            key={pokemon.id}
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
