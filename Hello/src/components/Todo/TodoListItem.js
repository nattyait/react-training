import React from 'react'

class TodoListItem extends React.Component{
  render(){
    return (
          <li>{this.props.todo.text}</li>

    )
  }
}

export default TodoListItem
