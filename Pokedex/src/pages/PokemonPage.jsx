import React from 'react';
import PokemonAPI from '../APIRequest/pokemonRequest';

export const PokemonPage = () => {
  return (
    <div>
      <PokemonAPI nums={150} />
    </div>
  );
}

export default PokemonPage;
