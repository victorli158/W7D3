import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
