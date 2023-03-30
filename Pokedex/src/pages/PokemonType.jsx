import React from 'react';
import { Link } from 'react-router-dom';
import { usePokemonAPI } from '../APIRequest/pokemonRequest';

export const PokemonType = () => {
  const { data, isLoading, error } = usePokemonAPI(11);
  
  return (
    <div className='container mx-auto p-2'>
      {isLoading ? (
        <p className='text-center'>Loading data...</p>
      ) : error ? (
        <p className='text-center'>Error: {error}</p>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data && data.map((pokemon) => (
            <li className='bg-white border border-gray-300 rounded-lg' key={pokemon.id}>
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
                  <div className='flex justify-center'>
                    <p className='text-gray-600 text-lg'>{pokemon.types[0]?.type.name}</p>
                    {pokemon.types[1] && (
                      <p className='text-gray-600 text-lg mx-2'>{pokemon.types[1].type.name}</p>
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

export default PokemonType;