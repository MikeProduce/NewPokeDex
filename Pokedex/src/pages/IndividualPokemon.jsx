import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonAPI } from '../APIRequest/pokemonRequest';

export const IndividualPokemon = () => {
  const { pokemonId } = useParams();
  const { data, isLoading, error } = usePokemonAPI(pokemonId);

  return (
    <div className='lg:mx-20 mx-0'>
      {isLoading ? (
        <p className='mx-auto'>Loading data...</p>
      ) : error ? (
        <p className='mx-auto'>Error: {error}</p>
      ) : (
        <div className='text-center mt-5'>
          <img
            className='mx-auto w-64 h-64 md:h-72 md:h-72 object-contain'
            src={data.sprites.front_default}
            alt=''
          />
          <p className='text-xl'>
            name: {data.id} {data.name}
          </p>
          <div className='flex justify-center'>
            <p className='mx-2'>type: {data.types[0]?.type.name}</p>
            <p className='mx-2'>{data.types[1]?.type.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualPokemon;


