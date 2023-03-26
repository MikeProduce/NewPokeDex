
import { useParams } from 'react-router-dom';
import {useSinglePokemonAPI} from '../APIRequest/SinglePokemonReq';

export const IndividualPokemon = () => {

  const { pokemonId } = useParams();
console.log(pokemonId);
  const { pokemon, isLoading, error } = useSinglePokemonAPI(pokemonId);




  return (
    <div className='lg:mx-20 mx-0'>
      {isLoading ? (
        <p className='mx-auto'>Loading pokemon...</p>
      ) : error ? (
        <p className='mx-auto'>Error: {error}</p>
      ) : (
        <div className='text-center mt-5'>
          {pokemon && ( // add null check here
            <>
              <img
                className='mx-auto w-64 h-64 md:h-72 md:h-72 object-contain'
                src={pokemon.sprites.front_default}
                alt=''
              />
              <p className='text-xl'>
                name: {pokemon.name}
              </p>
              <div className='flex justify-center'>
                <p className='mx-2'>type: {pokemon.types[0]?.type.name}</p>
                <p className='mx-2'>{pokemon.types[1]?.type.name}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualPokemon;



