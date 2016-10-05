import React from 'react'
import TodoInput from './TodoInput'
import CompletionToggle from './CompletionToggle'
import TodoList from './TodoList'

function createTodo(text){
  return {
    id: Date.now(),
    text: text
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        createTodo("Todo 1"),
        createTodo("Todo 2")
      ],

    }
  }
  render(){
    return (
      <div className = "todo-app">
        <h1>Todo App</h1>
        <TodoInput />
        <CompletionToggle />
        <TodoList />
      </div>
    )
  }
}

export default TodoApp
