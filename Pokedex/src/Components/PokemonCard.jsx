import { Link } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  return (
    <li
      className="bg-white border border-gray-300 rounded-lg pb-5 hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
      key={pokemon.name}
    >
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="p-2">
          <div className="flex justify-center">
            <img
              className="w-64 h-64 md:w-48 md:h-48 object-contain"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </div>
          <p className="text-2xl font-bold text-center mb-2 text-gray-600">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </p>
          <div className="flex flex-wrap justify-center">
            <p
              className={`text-center rounded-full w-20 mx-2 px-5 mb-2 text-white text-lg bg-${pokemon.types[0].type.name}`}
            >
              {pokemon.types[0]?.type.name}
            </p>
            {pokemon.types[1] && (
              <p
                className={`rounded-full w-20 mx-2 px-5 mb-2 text-white text-lg bg-${pokemon.types[1].type.name}`}
              >
                {pokemon.types[1].type.name}
              </p>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
