import { useParams } from "react-router-dom";
import { useSinglePokemonAPI } from "../APIRequest/SinglePokemonReq";

export const IndividualPokemon = () => {
  const { pokemonId } = useParams();
  const { pokemon, isLoading, error } = useSinglePokemonAPI(pokemonId);

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <p className="text-center">Loading pokemon...</p>
      ) : error ? (
        <p className="text-center text-fire font-bold mt-4">Error: {error}</p>
      ) : (
        <div className="text-center">
          {pokemon && (
            <div>
              <div className="bg-gray-800 rounded-lg p-4 sm:p-10">
                <div className="sm:flex sm:justify-between text-center">
                  <h1 className="text-3xl font-bold mb-2 text-gray-200 sm:text-left">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>
                  <p className="text-gray-400 mb-4 sm:text-right text-3xl">
                    #{pokemon.id}
                  </p>
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    className="w-72 h-72 md:w-96 md:h-96 object-contain"
                    src={pokemon.sprites.front_default}
                    alt={`Image of ${pokemon.name}`}
                  />
                </div>
                <div className="flex flex-wrap justify-center mb-4">
                  <span
                    className={`inline-block w-40 mx-2 my-2 px-8 py-1 text-sm font-semibold text-white bg-${pokemon.types[0].type.name} rounded-full`}
                    aria-label={`Type: ${pokemon.types[0]?.type.name}`}
                  >
                    {pokemon.types[0]?.type.name.charAt(0).toUpperCase() +
                      pokemon.types[0]?.type.name.slice(1)}
                  </span>
                  {pokemon.types[1] && (
                    <span
                      className={`inline-block w-40 mx-2 my-2 px-8 py-1 text-sm font-semibold text-white bg-${pokemon.types[1].type.name} rounded-full`}
                      aria-label={`Type: ${pokemon.types[1]?.type.name}`}
                    >
                      {pokemon.types[1]?.type.name.charAt(0).toUpperCase() +
                        pokemon.types[1]?.type.name.slice(1)}
                    </span>
                  )}
                </div>
                <div className="sm:flex justify-center block">
                  <div className="w-1/2 text-center mx-auto">
                    <h2 className="text-2xl font-bold text-gray-200 mb-2">
                      Height
                    </h2>
                    <p className="text-gray-300 text-xl">{pokemon.height}</p>
                  </div>
                  <div className="w-1/2 text-center mx-auto">
                    <h2 className="text-2xl font-bold text-gray-200 mb-2">
                      Weight
                    </h2>
                    <p className="text-gray-300 text-xl">{pokemon.weight}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 bg-gray-800 p-10 rounded-lg">
                <h2
                  className="text-2xl font-bold text-gray-200 mb-2"
                  id="base-stats"
                >
                  BASE STATS
                </h2>
                {pokemon.stats.map((stat, index) => (
                  <div
                    className="w-full mt-3 items-center text-left"
                    key={index}
                  >
                    <div
                      className="text-gray-400 font-semibold text-md w-24 mr-4"
                      id={stat.stat.name}
                    >
                      {stat.stat.name.toUpperCase()}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden p-0.5">
                      <label htmlFor={stat.stat.name} className="sr-only">
                        {stat.stat.name} value
                      </label>
                      <div
                        className="bg-gray-900 w-full text-xs text-white text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${stat.base_stat}%` }}
                      >
                        {stat.base_stat}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualPokemon;
