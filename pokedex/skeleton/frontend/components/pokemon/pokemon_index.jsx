import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol>
        {this.props.pokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.image_url} height="30" width="30"></img>
            {pokemon.name}
          </li>
        ))}
      </ol>
    );
  }
}

export default PokemonIndex;
