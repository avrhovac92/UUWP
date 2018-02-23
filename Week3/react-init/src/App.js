import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'lets try some random text'
    };
  }
  render() {
    const { state: { text }, changeState } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          lets try this <br />
        </p>
        <div onClick={changeState}>{text}</div>
      </div>
    );
  }

  changeState = () => {
    this.setState(() => ({
      text:
        this.state.text === 'Changed text'
          ? 'lets try some random text'
          : 'Changed text'
    }));
  };
}

export default App;
