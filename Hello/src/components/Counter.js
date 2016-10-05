import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.onClickIncrease = this.onClickIncrease.bind(this)
    this.onClickDecrease = this.onClickDecrease.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
    this.state = {
      counter: 0
    }
  }
  onClickIncrease() {
    this.setState({
      counter: this.state.counter+1
    })
  }
  onClickDecrease() {
    this.setState({
      counter: this.state.counter-1
    })
  }
  onClickReset(){
    this.setState({
      counter: 0
    })
  }
  render(){
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.onClickIncrease}>+</button>
        <button onClick={this.onClickDecrease}>-</button>
        <button onClick={this.onClickReset}>reset</button>
      </div>
    )
  }
}

export default Counter
