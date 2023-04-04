import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPokemon = () => {
  const [searchType, setSearchType] = useState("All");
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
    // if (searchType === "Generation") {
    //   navigate(`/${searchInputToLowerCase}`, { replace: true });
    // }
  };

  return (
    <div className="pt-2 sm:pt-0 flex items-center w-full">
      <form onSubmit={searching}>
        <div className="relative flex items-center">
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
          />
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
