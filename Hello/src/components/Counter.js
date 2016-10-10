import React, { Component } from 'react'

import CounterControl from './CounterControl'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../actions/counterActions'

class Counter extends Component{

  // //ให้ view มา subscribe store ไม่งั้นบนหน้าจอไม่เปลีย่น
  // componentDidMount() {
  //   //this.unsubscribe = this.props.store.subscribe( () => {
  //   this.unsubscribe = this.context.store.subscribe ( () => {
  //     this.forceUpdate()
  //   })
  // }
  //
  // componentWillUnmount(){
  //   this.unsubscribe()
  // }
  render(){

    // get state from store
    // const { store } = this.props

    // get state from context
    //const { store } = this.context
    //const counter = store.getState()

    //ไม่ต้องมี context แล้ว พอ connect แล้วได้ state เป็น props แล้ว
    const counter = this.props.counter

    return (
      <div>
        {/* เอาค่าจาก store มา show แทน บนหน้าจอก็ render ต่อกับ store แล้ว*/}
        <h1>Counter: {counter}</h1>
        {/* ตัวนี้เป็นตัว dispatch action เลยส่ง store ให้มันด้วย */}
        {/* <CounterControl store={store} /> */}
        <CounterControl
          increaseCounter = {this.props.increaseCounter}
          decreaseCounter = {this.props.decreaseCounter}
          resetCounter = {this.props.resetCounter}
        />
      </div>
    )
  }
}

function mapStoreStateToProps(state){
  return {
    counter: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // increaseCounter: () => {
    //   dispatch(increaseCounter()) // key: function(dispatch(function))
    // }
    //after import bindActionCreators
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
    decreaseCounter: bindActionCreators(decreaseCounter, dispatch),
    resetCounter: bindActionCreators(resetCounter, dispatch)
  }
}

//const connectedComponent = connect()(Counter)
// บรรทัดนี้คือ subscribe store ให้เอง ทำให้ไม่่ต้องมี componentDidMount / componentWillUnmount ออกได้
// ส่ง state เป็น prop
// connect เอา store ออกมาจาก context
export default connect(mapStoreStateToProps, mapDispatchToProps)(Counter)
