export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon'
  })
);
