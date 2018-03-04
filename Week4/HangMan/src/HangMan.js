import React, { Component } from 'react';
import Picture from './Picture';
import Word from './Word';
import ToList from './ToList';
import { Words } from './constants';

export default class HangMan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringLetters: ['ABCDEFGHIJKLM', 'NOPQRSTUVWXYZ'],
      pressedLetters: [],
      matchedLetters: [],
      word: Words[0],
      mistakes: 0,
      gameOver: false
    };
  }

  render() {
    const {
      state: {
        mistakes,
        word,
        stringLetters,
        pressedLetters,
        matchedLetters,
        gameOver
      },
      onButtonPress,
      resetGame
    } = this;
    return (
      <div>
        <Picture mistakes={mistakes} />
        <Word word={word} matchedLetters={matchedLetters} />
        <div className="boxx">
          {stringLetters.map((item, key) => (
            <ToList
              key={key}
              pressedLetters={pressedLetters}
              stringLetters={item}
              onButtonPress={onButtonPress}
              gameOver={gameOver}
            />
          ))}
        </div>
        {gameOver ? (
          <button onClick={resetGame} class="tryAgin">
            Try again
          </button>
        ) : null}
      </div>
    );
  }

  onButtonPress = item => {
    const {
      state: { pressedLetters, matchedLetters, word, mistakes },
      props: { changeHangman },
      checkMatchedLetters
    } = this;
    let result = { pressedLetters: [...pressedLetters, item] };
    if (word.indexOf(item) !== -1) {
      result.matchedLetters = [...matchedLetters, item];
      if (checkMatchedLetters(result.matchedLetters, word)) {
        changeHangman('You Win');
        result.mistakes = 7;
        result.gameOver = true;
      }
    } else {
      result.mistakes = mistakes + 1;
      if (result.mistakes > 5) {
        result.gameOver = true;
        changeHangman('Game Over');
      }
    }

    this.setState(result);
  };

  resetGame = () => {
    let i = Math.floor(Math.random() * Words.length);
    this.setState({
      pressedLetters: [],
      matchedLetters: [],
      word: Words[i],
      mistakes: 0,
      gameOver: false,
      gameWon: false
    });
    this.props.changeHangman('Hang Man');
  };

  differentlLetters = word => {
    let counter = 0;
    for (let i = 65; i < 91; i++) {
      if (word.indexOf(String.fromCharCode(i)) !== -1) {
        counter++;
      }
    }
    return counter;
  };

  checkMatchedLetters = (list, word) => {
    const newList = word.split('');
    const result = newList.filter(item => list.indexOf(item) === -1);
    if (result.length) {
      return false;
    }
    return true;
  };
}
