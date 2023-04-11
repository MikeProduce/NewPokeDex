import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarSuggestions } from "../navbar/searchBarSuggestions";

const SearchPokemon = () => {
  const [searchType, setSearchType] = useState("All");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const searching = function (event) {
    event.preventDefault(); // prevent form submission
    const searchInput = event.target.searchInput.value;
    const searchInputToLowerCase = searchInput.toLowerCase();
    if (searchType === "All") {
      navigate(`pokemon/${searchInputToLowerCase}`, { replace: true });
      setValue("");
    }
    if (searchType === "Type") {
      navigate(`PokemonType/${searchInputToLowerCase}`, { replace: true });
    }
  }; //function runs the search input

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="pt-2 sm:pt-0 flex items-center flex-wrap">
      <form onSubmit={searching}>
        <div className="relative flex items-center flex-column max-w-xs sm:max-w-full">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="h-10 px-3 bg-gray-700 text-white w-full rounded-l-md focus:outline-none focus:bg-gray-900 transition duration-300"
          >
            <option value={"All"}>All Pokemon</option>
            <option value={"Type"}>Type</option>
            <option value={"Generation"}>Generation</option>
          </select>
          <input
            name="searchInput"
            className="h-10 bg-gray-700 pl-5 text-white w-full rounded-r-md focus:outline-none focus:bg-gray-900 transition duration-300"
            type="text"
            placeholder="Search..."
            value={value}
            onChange={onChange}
          />
          <SearchBarSuggestions value={value} setValue={setValue} />
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
