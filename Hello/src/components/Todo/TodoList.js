import React from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends React.Component{
  render(){
    //2.

    const todoElements = this.props.todos.map((todo, index) => {
      return <TodoListItem todo={todo} key={index} />
    })
    return (
      <ul>
        { todoElements }
      </ul>

    )
  }
}

export default TodoList
