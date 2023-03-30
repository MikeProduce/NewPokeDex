import React from 'react';
import { Link } from 'react-router-dom';
import { usePokemonAPI } from '../APIRequest/pokemonRequest';

const PokemonPage = () => {
  const { data, isLoading, error } = usePokemonAPI(150);
  
  return (
    <div className='container mx-auto p-2'>
      {isLoading ? (
        <p className='text-center'>Loading data...</p>
      ) : error ? (
        <p className='text-center'>Error: {error}</p>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data && data.map((pokemon) => (
            <li className='bg-white border border-gray-300 rounded-lg pb-5' key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>
                <div className='p-2'>
                  <div className='flex justify-center'>
                    <img
                      className='w-64 h-64 md:w-48 md:h-48 object-contain'
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  </div>
                  <h3 className='text-2xl font-bold text-center mb-2 text-gray-600'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                  <div className='flex flex-wrap justify-center'>
                    <p className={`text-center rounded-full w-20 mx-2 px-5 mb-2 text-white text-lg bg-${pokemon.types[0].type.name}`}>{pokemon.types[0]?.type.name}</p>
                    {pokemon.types[1] && (
                      <p className={`rounded-full w-20 mx-2 px-5 mb-2 text-white text-lg bg-${pokemon.types[1].type.name}`}>{pokemon.types[1].type.name}</p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonPage;




// when we click on the button we it can take us to the next page with some parameters and those parameters will have the name of the pokemon and display it 

