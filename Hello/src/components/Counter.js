import React, { Component } from 'react'

import CounterControl from './CounterControl'

class Counter extends Component{
  constructor(props){
    super(props)
    this.onValueChange = this.onValueChange.bind(this)
    this.state = {
      counter: 0
    }
  }
  //ตัว component นี้ไม่จำเป็นต้องรู้่วาทำยังงัย แค่รอรับค่าเปลี่ยนแปลงแล้วเอาไป setState
  onValueChange(value){
    this.setState({
      counter: value
    })
  }
  render(){
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <CounterControl
          currentValue={this.state.counter}
          onValueChange={this.onValueChange} />
      </div>
    )
  }
}

export default Counter
