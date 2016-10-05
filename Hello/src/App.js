import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Counter from './components/Counter'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hello />
        <Counter />
      </div>
    );
  }
}
export default App;
