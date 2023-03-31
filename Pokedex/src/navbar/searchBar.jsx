import { useState } from 'react';
import { useSinglePokemonAPI } from '../APIRequest/SinglePokemonReq';

const SearchPokemon = () => {
  const [searchForPokemon, setSearchForPokemon] = useState('');
  const { data, isLoading, error } = useSinglePokemonAPI(searchForPokemon);
  console.log(data);

  const searching = function(event) {
    event.preventDefault(); // prevent form submission
    const input = event.target.elements.searchInput.value; // get the input value
    setSearchForPokemon(input); // set the searchForPokemon state variable
  };
  
  return (
    <div className="ml-6 flex items-center">
      <form onSubmit={searching}>
        <input name='searchInput' className="bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-900 transition duration-300" type="text" placeholder="Search..."/>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-700 transition duration-300" type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default SearchPokemon;





