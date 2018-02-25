import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCustomComponent from './MyCustomComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'This is text from state',
      style: 'App-header'
    };
  }
  render() {
    const { props: { property }, state: { style }, changeState } = this;
    return (
      <div className="App">
        <header className={style} onClick={changeState}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>this is value of property: {property} </div>
        <MyCustomComponent />
      </div>
    );
  }

  changeState = () => {
    const { text, style } = this.state;
    this.setState(() => ({
      text:
        text === 'This is text from state'
          ? 'This is text from state but changed.'
          : 'This is text from state',
      style: style === 'App-header' ? 'Green-header' : 'App-header'
    }));
  };
}

export default App;
