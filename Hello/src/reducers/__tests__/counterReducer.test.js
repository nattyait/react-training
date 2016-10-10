import counterReducer from '../counterReducer'
import { INCREASE_COUNTER } from '../../actions/counterActions'

describe('Counter Reducer', () => {
  it('should have initial state', () => {
    const actual = counterReducer(null, {type: '@@INIT'})
    const expected = 0

    expect(actual).toEqual(expected)
  })

  it('should increase counter on INCREASE_COUNTER', () => {
    const action = {
      type: INCREASE_COUNTER
    }
    const actual = counterReducer(0, action)
    const expected = 1

    expect(actual).toEqual(expected)
  })
})
