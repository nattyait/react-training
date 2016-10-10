import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Counter from './components/Counter'
import TodoApp from './components/Todo/TodoApp'
import Provider from './components/Provider'

class App extends Component {

  render() {
    return (
        <div className="App">
          {/* <TodoApp /> */}
          {/* เอา store จาก app ส่งไป counter */}
          {/* ถ้าใช้ context ก็เอา store ที่ parse เป็น props ออกไปเลย */}
          <Counter />
        </div>
    );
  }
}

export default App;
