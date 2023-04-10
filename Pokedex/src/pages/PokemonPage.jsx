import React, { useState } from "react";
import { usePokemonAPI } from "../APIRequest/pokemonRequest";
import { PokemonCard } from "../Components/PokemonCard";
const PokemonPage = () => {
  const [nums, setnums] = useState(24);
  const [bottom, setbottom] = useState(1);
  const { data, isLoading, error } = usePokemonAPI(bottom, nums);

  const nextPage = function () {
    setnums(nums + 24);
    setbottom(bottom + 24);
  };
  const reducePage = function () {
    setnums(nums - 24);
    setbottom(bottom - 24);
  };
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
      <button
        onClick={reducePage} // call nextPage function
        className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextPage} // call nextPage function
        className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </section>
  );
};

export default PokemonPage;

// when we click on the button we it can take us to the next page with some parameters and those parameters will have the name of the pokemon and display it
