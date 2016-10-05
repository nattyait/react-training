import React from 'react'

class CounterControl extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
        <button onClick={this.props.onReset}>reset</button>
      </div>
    )
  }
}
export default CounterControl
