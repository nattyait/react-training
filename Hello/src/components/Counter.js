import React, { Component } from 'react'

import CounterControl from './CounterControl'

class Counter extends Component{

  //ให้ view มา subscribe store ไม่งั้นบนหน้าจอไม่เปลีย่น
  componentDidMount() {
    //this.unsubscribe = this.props.store.subscribe( () => {
    this.unsubscribe = this.context.store.subscribe ( () => {
      this.forceUpdate()
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }
  render(){

    // get state from store
    // const { store } = this.props

    // get state from context
    const { store } = this.context
    const counter = store.getState()

    return (
      <div>
        {/* เอาค่าจาก store มา show แทน บนหน้าจอก็ render ต่อกับ store แล้ว*/}
        <h1>Counter: {counter}</h1>
        {/* ตัวนี้เป็นตัว dispatch action เลยส่ง store ให้มันด้วย */}
        <CounterControl store={store} />
      </div>
    )
  }
}

Counter.contextTypes = {
  store: React.PropTypes.object
}

export default Counter
