
export default function todoReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_TODO':
    //mutate state **DON'T**
      // state.push({
      //   text: action.text,
      //   isCompleted: action.isCompleted
      // })
      //ทำงานเหมือน return state.concat([{
      return [...state, {
        text: action.text,
        isCompleted: action.isCompleted
      //}])
      }]

      case 'TOGGLE_DONE':
      //state[action.index].isCompleted = true
      const newState = state.map((todo, index) => {
        if (index != action.index) return todo

        return {
          text: todo.text,
          isCompleted: !todo.isCompleted
        }
      })
      return newState

      default:
        return state
  }
}
