import React, { Component } from "react";
import "./App.css";
// import Header from "./header";
// import ThemeColor from "./themeColor";
// import { Provider } from "./react-redux";
import Header from "./container/Header";
import Theme from "./container/Theme";
// function createStore(reducer) {
//     let state = null;
//     let listeners = [];
//     let subcribe = listener => listeners.push(listener);
//     let getState = () => state;
//     const dispatch = action => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//     dispatch({});
//     return { getState, dispatch, subcribe };
// }
// function reducer(state, action) {
//     if (!state) {
//         return { themeColor: "red" };
//     }
//     switch (action.type) {
//         case "CHANGE_COLOR":
//             return { ...state, themeColor: action.themeColor };
//             break;
//         default:
//             return state;
//     }
// }
// var store = createStore(reducer);
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Theme />
            </div>
        );
    }
}

export default App;
