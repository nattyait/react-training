import React from 'react'

import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterActions'

class CounterControl extends React.Component{
  constructor(props){
    super(props)
    this.onClickIncrease=this.onClickIncrease.bind(this)
    this.onClickDecrease=this.onClickDecrease.bind(this)
    this.onClickReset=this.onClickReset.bind(this)
  }

  onClickIncrease(){
    //this.props.onValueChange(this.props.currentValue + 1)
    //this.props.store.dispatch(increaseCounter())
    this.context.store.dispatch(increaseCounter())
  }
  onClickDecrease(){
    //this.props.onValueChange(this.props.currentValue - 1)
    //this.props.store.dispatch(decreaseCounter())
    this.context.store.dispatch(decreaseCounter())
  }
  onClickReset(){
    //this.props.onValueChange(0)
    //this.props.store.dispatch(resetCounter())
    this.context.store.dispatch(resetCounter())
  }

  render(){
    return(
      <div>
        <button onClick={this.onClickIncrease}>+</button>
        <button onClick={this.onClickDecrease}>-</button>
        <button onClick={this.onClickReset}>reset</button>
      </div>
    )
  }
}

//set อันนี้ไว้ จะทำให้ไม่ลืม parse prop เข้ามา
//ควรเขียนตัวนี้ไว้เป็น document แล้วมันจะขึ้นใน console ด้วยถ้าไม่ส่งมา
CounterControl.propTypes = {
  currentValue: React.PropTypes.number.isRequired,
  onValueChange: React.PropTypes.func.isRequired
}

CounterControl.contextTypes = {
  store: React.PropTypes.object
}

export default CounterControl
