import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import Content from './container/Content';

class App extends Component {
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
