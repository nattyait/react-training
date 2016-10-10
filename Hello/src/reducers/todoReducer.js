
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

      default:
        return state
  }
}
