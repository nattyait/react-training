import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Hello from './components/Hello'
import Counter from './components/Counter'
import TodoApp from './components/Todo/TodoApp'

class App extends Component {

// ลูกเรียก getContext มาแล้วจะได้ store คืนไป
  getChildContext() {
    return {
      store: this.props.store
    }
  }

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

App.childContextTypes = {
  store: React.PropTypes.object
}
export default App;
