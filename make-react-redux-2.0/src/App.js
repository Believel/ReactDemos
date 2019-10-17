import React, { Component } from "react";
import "./App.css";
import { Provider } from "./react-redux";
import Header from "./view/Header";
import Theme from "./view/Theme";
/**
 *
 * @param {*} reducer
 */
function createStore(reducer) {
    let state = null;
    const listeners = [];
    // 订阅
    const subscribe = listener => listeners.push(listener);
    const getState = () => state;
    // 调度
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    dispatch({}); // 初始化state
    return { getState, dispatch, subscribe };
}
// 定义一个表示主题色的状态
const themeReducer = (state, action) => {
    if (!state)
        return {
            themeColor: "red"
        };
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, themeColor: action.themeColor };
        default:
            return state;
    }
};
const store = createStore(themeReducer);
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <Theme />
                </div>
            </Provider>
        );
    }
}

export default App;
