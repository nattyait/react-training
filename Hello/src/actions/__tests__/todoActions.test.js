import {
  createTodo,
  toggleDone,
  CREATE_TODO,
  TOGGLE_DONE

 } from '../todoActions'

describe('Todo Actions', () => {
  it('should create CREATE_TODO action with text', () => {
    const actual = createTodo('Hello')
    const expected = {
      type: CREATE_TODO,
      text: 'Hello',
      isCompleted: false
    }

    expect(actual).toEqual(expected)
  })
  it('should create TOGGLE_DONE action with id', () => {
    const actual = toggleDone(1)
    const expected = {
      type: TOGGLE_DONE,
      index: 1
    }
    expect(actual).toEqual(expected)
  })
})
