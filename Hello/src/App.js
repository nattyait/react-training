import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "..."
    }
  }

  render() {
    const { name } = this.state
    return (
      <div className="App">
        <h1>hello, {this.state.name} </h1>
        <input type="text" onChange={(event)=>{
              //console.log(event.target.value)
              //this.state.name <= เรียกแบบนี้ไม่ได้เพราะมันโดนเรียกครั้งเดียว ยกเว้นต้อง render อีกรอบ
              this.setState({
                name: event.target.value
              })
          }
        }/>
      </div>
    );
  }
}

export default App;
