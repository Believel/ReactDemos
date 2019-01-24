import React, { Component } from 'react';
// import {Router, Route, Link} from 'react-router';
import './App.css';
import Timer from './Timer/Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
      </div>
    );
  }
}

export default App;
