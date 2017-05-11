import values from 'lodash/values';

export const selectAllPokemon = ({ pokemon }) => values(pokemon);

export const selectPoke = ({ pokemonDetail }) => pokemonDetail;
