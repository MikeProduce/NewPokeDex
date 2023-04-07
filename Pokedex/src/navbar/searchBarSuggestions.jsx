import React, { useMemo, useCallback, useEffect } from "react";
import { usePokemonAPI } from "../APIRequest/pokemonRequest";

export const SearchBarSuggestions = ({ value, setValue }) => {
  const { data } = usePokemonAPI(150);

  useEffect(() => {
    console.log("value has changed");
  }, [data]);

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

  const handleSearch = useCallback(
    (searchTerm) => {
      setValue(searchTerm);
    },
    [setValue]
  );

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
