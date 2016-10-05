import React from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends React.Component{
  render(){

    let todos = this.props.todos
    if(!this.props.showCompletion){
      todos = todos.filter((todo)=> {
        return !todo.isCompleted
      })
    }
    //2.

    const todoElements = todos.map((todo, index) => {
      return <TodoListItem todo={todo} key={index} onToggle={this.props.onToggleTodo} />
    })
    return (
      <ul>
        { todoElements }
      </ul>

    )
  }
}

export default TodoList
