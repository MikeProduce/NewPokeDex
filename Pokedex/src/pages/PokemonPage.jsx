import React from "react";
import { usePokemonAPI } from "../APIRequest/pokemonRequest";
import { PokemonCard } from "../Components/PokemonCard";
const PokemonPage = () => {
  const { data, isLoading, error } = usePokemonAPI(200);

  return (
    <section className="container mx-auto p-2">
      {isLoading ? (
        <p className="text-center">Loading data...</p>
      ) : error ? (
        <p className="text-center">Error: {error}</p>
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

export default PokemonPage;

// when we click on the button we it can take us to the next page with some parameters and those parameters will have the name of the pokemon and display it
