
import { createTodo, toggleDone } from '../../actions/todoActions'
import todoReducer from '../todoReducer'
import deepFreeze from 'deep-freeze'

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
    // freeze state ก่อน แล้วค่อยส่งเข้าไป
    Object.freeze(state)
    const actual = todoReducer(state, action)

    expect(actual).toEqual(expected)
  })
  it('should toggle done on TOGGLE_DONE', () => {
    const state = [{
      text: 'item1',
      isCompleted: false
    },{
      text: 'item2',
      isCompleted: false
    }]
    const action = toggleDone(1)
    const expected = [{
      text: 'item1',
      isCompleted: false
    },{
      text: 'item2',
      isCompleted: true
    }]

    deepFreeze(state)
    const actual = todoReducer(state, action)
    expect(actual).toEqual(expected)
  })
})
