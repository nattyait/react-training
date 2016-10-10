
export const CREATE_TODO = 'CREATE_TODO'
export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text: text,
    isCompleted: false
  }
}

export const TOGGLE_DONE = 'TOGGLE_DONE'
export function toggleDone(id) {
  return{
    type: TOGGLE_DONE,
    id: id
  }
}
