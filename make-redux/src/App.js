import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './view/Header';
import Content from './view/Content';
function createStore (reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化state
  return {getState, dispatch, subscribe}
}
// 定义一个表示主题色的状态
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR': 
    return {...state, themeColor: action.themeColor}
    default:
    return state
  }
}
const store = createStore(themeReducer)
class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return {store}
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
