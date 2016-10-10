import counterReducer from '../counterReducer'
//import { INCREASE_COUNTER } from '../../actions/counterActions'
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from '../../actions/counterActions'

describe('Counter Reducer', () => {
  it('should have initial state', () => {
    const actual = counterReducer(undefined, {type: '@@INIT'})
    const expected = 0

    expect(actual).toEqual(expected)
  })

  it('should increase counter on INCREASE_COUNTER', () => {
    const action = increaseCounter() //POJO

    let actual = counterReducer(0, action)
    let expected = 1

    expect(actual).toEqual(expected)

    //test increase again
    actual = counterReducer(1, action)
    expected = 2
    expect(actual).toEqual(expected)
  })

  it('should decrease counter on DECREASE_COUNTER', () => {
    const action = decreaseCounter()

    let actual = counterReducer(0, action)
    let expected = -1

    expect(actual).toEqual(expected)
  })

  it('should reset counter on RESET_COUNTER', () => {
    const action = resetCounter()

    let actual = counterReducer(10, action)
    let expected = 0

    expect(actual).toEqual(expected)
  })
})
