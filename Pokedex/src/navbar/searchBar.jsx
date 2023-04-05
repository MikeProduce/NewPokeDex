import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePokemonAPI from "../APIRequest/pokemonRequest";
const SearchPokemon = () => {
  const { data, isLoading, error } = usePokemonAPI(150);
  const [searchType, setSearchType] = useState("All");
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const searching = function (event) {
    event.preventDefault(); // prevent form submission
    const searchInput = event.target.searchInput.value;
    const searchInputToLowerCase = searchInput.toLowerCase();
    if (searchType === "All") {
      navigate(`pokemon/${searchInputToLowerCase}`, { replace: true });
    }
    if (searchType === "Type") {
      navigate(`PokemonType/${searchInputToLowerCase}`, { replace: true });
    }
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };
  return (
    <div className="pt-2 sm:pt-0 flex items-center w-full">
      <form onSubmit={searching}>
        <div className="relative flex items-center w-full">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="h-10 bg-gray-700 text-white py-3 px-4 rounded-l-md focus:outline-none focus:bg-gray-900 transition duration-300"
          >
            <option value={"All"}>All Pokemon</option>
            <option value={"Type"}>Type</option>
            <option value={"Generation"}>Generation</option>
          </select>
          <input
            name="searchInput"
            className="h-10 bg-gray-700 text-white py-3 px-4 rounded-r-md focus:outline-none focus:bg-gray-900 transition duration-300"
            type="text"
            placeholder="Search..."
            value={value}
            onChange={onChange}
          />
          <div
            className={`absolute bg-gray-900 top-full left-0 right-0 shadow-lg rounded-md overflow-hidden mt-1 ${
              value === "" ? "hidden" : "block"
            }`}
          >
            <ul className="py-1">
              {data &&
                data
                  .filter((pokemon) => {
                    const searchTerm = value.toLowerCase();
                    const pokemonName = pokemon.name.toLowerCase();
                    return (
                      searchTerm &&
                      pokemonName.startsWith(searchTerm) &&
                      pokemon.name !== searchTerm
                    );
                  })
                  .map((pokemon) => (
                    <li
                      onClick={() => onSearch(pokemon.name)}
                      key={pokemon.id}
                      className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                    >
                      {pokemon.name}
                    </li>
                  ))}
            </ul>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPokemon;
