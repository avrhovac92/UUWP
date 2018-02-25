import React, { Component } from 'react';

export default class MyCustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoList: []
    };
  }
  render() {
    const {
      state: { value, todoList },
      changeText,
      onButtonClick,
      removeFromList
    } = this;
    return (
      <div>
        <p className="to-do-list-header">Todo List: </p>
        <input
          value={value}
          type="text"
          onChange={changeText}
          className="to-do-list-input"
        />
        <br />
        <button className="to-do-list button" onClick={onButtonClick}>
          Press me!
        </button>
        <br />
        <button className="to-do-list button" onClick={removeFromList}>
          Remove me!
        </button>

        <div className="list-container">
          {todoList.map((item, key) => (
            <div key={key} className="list-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  onButtonClick = e => {
    const { value, todoList } = this.state;
    this.setState({ todoList: [...todoList, value] });
  };

  changeText = e => {
    this.setState({ value: e.target.value });
  };

  removeFromList = () => {
    const newList = [...this.state.todoList];
    newList.pop();
    this.setState({ todoList: newList });
  };
}
