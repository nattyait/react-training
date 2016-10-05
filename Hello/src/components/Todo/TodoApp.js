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
        createTodo("Todo 2"),
        createTodo("Todo 3"),
        createTodo("Todo 4")
      ],

    }
  }
  render(){
    return (
      <div className = "todo-app">
        <h1>Todo App</h1>
        <TodoInput />
        <CompletionToggle />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp
