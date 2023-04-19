import PokemonCard from "../Components/PokemonCard";
import { usePokemonTypeAPI } from "../APIRequest/pokemonRequestType";
import { useParams } from "react-router-dom";

export const PokemonType = () => {
  const { Type } = useParams();
  const { data, isLoading, error } = usePokemonTypeAPI(Type);

  return (
    <section className="container mx-auto p-2">
      {isLoading ? (
        <p className="text-center">Loading data...</p>
      ) : error ? (
        <p className="text-center text-fire font-bold mt-4">Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.name} />
            ))}
        </ul>
      )}
    </section>
  );
};

export default PokemonType;
