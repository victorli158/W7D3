import { connect } from 'react-redux';
import { selectPoke } from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  poke: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
