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
  // onClickIncrease() {
  //   this.setState({
  //     counter: this.state.counter+1
  //   })
  // }
  // onClickDecrease() {
  //   this.setState({
  //     counter: this.state.counter-1
  //   })
  // }
  // onClickReset(){
  //   this.setState({
  //     counter: 0
  //   })
  // }
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
