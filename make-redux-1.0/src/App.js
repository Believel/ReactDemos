import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './view/Header';
import Content from './view/Content';
/**
 * 
 * @param {*} reducer 
 */
function createStore (reducer) {
    let state = null;
    const listeners = [];
    // 订阅
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    // 调度
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
    // 生产者消费者模式
    // 通过静态属性childCOntextTypes声明提供给子组件的Context对象的属性，并实现一个实例getChildContext方法，返回一个代表Context的纯对象(plain object)
    static childContextTypes = {
        store: PropTypes.object
    }
    // 上下文：使用Context,可以跨越组件进行数据传递
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
