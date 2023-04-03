import { useNavigate } from "react-router-dom";

const SearchPokemon = () => {
  const navigate = useNavigate();
  const searching = function (event) {
    event.preventDefault(); // prevent form submission
    const searchInput = event.target.searchInput.value;
    const searchInputToLowerCase = searchInput.toLowerCase();
    navigate(`pokemon/${searchInputToLowerCase}`, { replace: true });
  };

  return (
    <div className="pt-2 sm:pt-0 flex items-center w-full">
      <form onSubmit={searching}>
        <input
          name="searchInput"
          className="bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-900 transition duration-300"
          type="text"
          placeholder="Search..."
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPokemon;
