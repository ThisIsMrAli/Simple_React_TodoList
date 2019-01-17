import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList todos= {[{text: 'Sample Todo'}]}/>
      </div>
    );
  }
}

export default App;
