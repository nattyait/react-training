import React from 'react'

class TodoInput extends React.Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(event){
    event.preventDefault()
    const input = this.refs.input
    const text = input.value
    input.value = ""
    if(text.length === 0){
      return
    }
    this.props.onTodoInputSubmit(text)
  }
  render(){
    return (
      //3.
      <form onSubmit={this.onSubmit}>
        <input type="text" name="text" ref="input"/>
      </form>

    )
  }
}

export default TodoInput
