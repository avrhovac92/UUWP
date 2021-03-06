import React, { Component } from 'react';
import 'css/App.css';
import HangMan from 'components/HangMan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Hang Man'
    };
  }
  render() {
    const { state: { heading }, changeHangman } = this;
    return (
      <div className="frame">
        <p className="text">{heading}</p>
        <HangMan changeHangman={changeHangman} />
      </div>
    );
  }

  changeHangman = param => {
    this.setState({ heading: param });
  };
}
export default App;
