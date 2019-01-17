import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { Provider } from "react-redux";


import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { save, load } from "redux-localstorage-simple"

import reducer from "./store";

const reduxStore = createStore(reducer, load(), applyMiddleware(logger, save()));
//const reduxStore = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div className="App">
          <TodoInput />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
