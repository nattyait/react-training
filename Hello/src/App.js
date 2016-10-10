import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Hello from './components/Hello'
import Counter from './components/Counter'
import TodoApp from './components/Todo/TodoApp'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <TodoApp /> */}
        {/* เอา store จาก app ส่งไป counter */}
        <Counter store={this.props.store}/>
      </div>
    );
  }
}
export default App;
