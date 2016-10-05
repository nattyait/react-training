import React from 'react'
import TodoInput from './TodoInput'
import CompletionToggle from './CompletionToggle'
import TodoList from './TodoList'

function createTodo(text){
  return {
    id: Date.now(),
    text: text,
    isCompleted: true
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.onTodoInputSubmit = this.onTodoInputSubmit.bind(this)
    this.state = {
      todos: [
        createTodo("Todo 1"),
        createTodo("Todo 2"),
        createTodo("Todo 3"),
        createTodo("Todo 4")
      ],
    }
  }
  onTodoInputSubmit(text) {
    const todo = createTodo(text)
    let todos = this.state.todos.concat([todo])
    //todo.push(todo)
    this.setState({
      todos: todos
    })
  }

  onToggleTodo(todo){
    todo.isCompleted = !todo.isCompleted
    this.forceUpdate()
  }

//เอาไว้เช็คว่าเราควร render หรือไม่ควร render
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextState.todos === this.state.todos)
  }

  render(){
    return (
      <div className = "todo-app">
        <h1>Todo App</h1>
        <TodoInput onTodoInputSubmit={this.onTodoInputSubmit}/>
        <CompletionToggle />
        <TodoList
          todos={this.state.todos}
          onToggleTodo={this.onToggleTodo.bind(this)}

          />
      </div>
    )
  }
}

export default TodoApp
