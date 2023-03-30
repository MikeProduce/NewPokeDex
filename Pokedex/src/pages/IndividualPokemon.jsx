import { useParams } from 'react-router-dom';
import { useSinglePokemonAPI } from '../APIRequest/SinglePokemonReq';

export const IndividualPokemon = () => {

  const { pokemonId } = useParams();
  const { pokemon, isLoading, error, pokemonEvolution } = useSinglePokemonAPI(pokemonId);
  // console.log(pokemon.types[0]?.type.name)

  return (
    <div className='container mx-auto px-4 py-8'>
      {isLoading ? (
        <p className='text-center'>Loading pokemon...</p>
      ) : error ? (
        <p className='text-center'>Error: {error}</p>
      ) : (
        <div className='text-center'>
          {pokemon && (
            <div>
              <div className='flex justify-between'>
                <h1 className='text-3xl font-bold mb-2 text-gray-200 text-left'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                <p className='text-gray-400 mb-4 text-right text-3xl'>#{pokemon.id}</p>
              </div>
              <div className='flex justify-center mb-4'>
                <img
                  className='w-72 h-72 md:w-96 md:h-96 object-contain'
                  src={pokemon.sprites.front_default}
                  alt=''
                />
              </div>
              <div className='flex justify-center mb-4'>
                <span className={`inline-block px-8 py-1 text-sm font-semibold text-white bg-${pokemon.types[0]?.type.name} rounded-full mr-2`}>{pokemon.types[0]?.type.name.charAt(0).toUpperCase() + pokemon.types[0]?.type.name.slice(1)}</span>
                {pokemon.types[1] && (
                  <span className='inline-block px-8 py-1 text-sm font-semibold text-white bg-gray-500 rounded-full'>{pokemon.types[1]?.type.name.charAt(0).toUpperCase() + pokemon.types[1]?.type.name.slice(1)}</span>
                )}
              </div>
              <div className='flex justify-center'>
                <div className='w-1/2 text-center'>
                  <h2 className='text-xl font-bold text-gray-200 mb-2'>Height</h2>
                  <p className='text-gray-400'>{pokemon.height}</p>
                </div>
                <div className='w-1/2 text-center'>
                  <h2 className='text-xl font-bold text-gray-200 mb-2'>Weight</h2>
                  <p className='text-gray-300'>{pokemon.weight}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualPokemon;




