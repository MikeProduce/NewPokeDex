import React, { useState } from "react";
import { usePokemonAPI } from "../APIRequest/pokemonRequest";
import { PokemonCard } from "../Components/PokemonCard";
import { PaginationButtons } from "../Components/PaginationButtons";
const PokemonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const { data, isLoading, error } = usePokemonAPI(currentPage, itemsPerPage);

  return (
    <section className="container w-full p-2">
      <div>
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
      </div>
      <PaginationButtons
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </section>
  );
};

export default PokemonPage;

// when we click on the button we it can take us to the next page with some parameters and those parameters will have the name of the pokemon and display it
