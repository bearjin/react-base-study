import React, { Component } from 'react';
import NumberBaseball from '../NumberBaseball/NuberBaseball-class';
import RSP from '../RSP/RSP-class';
import Lotto from '../Lotto/Lotto-class';

class GameMatcher extends Component {
  render() {
    let value = new URLSearchParams(this.props.location.search.slice(1));
    console.log(value.get('author'));
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />;
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />;
    }
    return (
      <div>일치하는 게임이 없습니다.</div>
    );
  }
}

export default GameMatcher;