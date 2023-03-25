import React from 'react';
import { Link } from 'react-router-dom';
import { usePokemonAPI } from '../APIRequest/pokemonRequest';

export const PokemonPage = () => {
  const {data,isLoading,error} = usePokemonAPI(100);

  return (
    <div className='lg:mx-20 mx-0'>
      {data ? (
        <ul className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 object-cover'>
          {data.map((pokemon) => (
            <li className='border-2 border-black mt-5 mx-2 py-2' key={pokemon.id}>
              <img
                className='mx-auto w-64 h-64 md:h-72 md:h-72 object-contain'
                src={pokemon.sprites.front_default}
                alt=''
              />
              <p className='text-xl'>
                name: {pokemon.id} {pokemon.name}
              </p>
              <div className='flex justify-center'>
                <p className='mx-2'>type: {pokemon.types[0]?.type.name}</p>
                <p className='mx-2'>{pokemon.types[1]?.type.name}</p>
              </div>
              <Link to={`/pokemon/${pokemon.id}`}>
                <button>More Information</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className='mx-auto'>Loading data...</p>
      )}
    </div>
  );
};

export default PokemonPage;


// when we click on the button we it can take us to the next page with some parameters and those parameters will have the name of the pokemon and display it 

