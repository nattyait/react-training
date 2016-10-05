import React from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>

    )
  }
}

export default TodoList
