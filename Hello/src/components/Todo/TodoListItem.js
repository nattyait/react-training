import React from 'react'

// class TodoListItem extends React.Component{
//   render(){
//     return (
//           <li>
//             {this.props.todo.text} [<a href="#">Mark done</a>]
//           </li>
//
//     )
//   }
// }
//
// export default TodoListItem

//Stateless Component
// export default (props) => (
//     <li>
//       {props.todo.text} [<a href="#">Mark done</a>]
//     </li>
// )

export default function TodoListItem ({ todo, onToggle }){

  const toggleFn = (e) => {
    e.preventDefault()
    onToggle(todo)
  }

  if(todo.isCompleted) {
    return <li><del>{todo.text}</del> [<a href="#" onClick={toggleFn}>Undo</a>]</li>
  }

  return(
    <li>
      {todo.text} [<a href="#" onClick={toggleFn}>Mark done</a>]
    </li>
  )
}

TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onToggle: React.PropTypes.func.isRequired,
}
