
import { createTodo, toggleDone } from '../../actions/todoActions'
import todoReducer from '../todoReducer'

describe('Todo Reducers', () => {
  it('should have initial state == []', () => {
    expect(
      todoReducer(undefined, {type: '@@INIT'})).toEqual([])
  })

  it('should add todo on CREATE_TODO', () => {
    const state = []
    const action = createTodo('hello')
    const expected = [{
      text: 'hello',
      isCompleted: false
    }]
    //check ความเพียว ของ function
    Object.freeze(state)
    const actual = todoReducer(state, action)

    expect(actual).toEqual(expected)
  })
})
