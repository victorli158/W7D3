import React from 'react';
import Router from 'react-router-dom';


class PokemonDetail extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestPoke(newProps.match.params.id);
  }

  render() {
    const { id, name, attack, defense, image_url, moves, poke_type, items } = this.props.poke;
    return (
      <div>
        <img src={image_url}></img>
        <ul>
          <li>{name}</li>
          <li>Type: {poke_type}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {moves}</li>
          <li>Items: {items}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
