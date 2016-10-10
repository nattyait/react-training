import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
  } from '../counterActions'

describe("Counter Actions", () => {
  it("should create INCRESE_COUNTER", () => {
    const actual = increaseCounter()
    const expected = {
      type: INCREASE_COUNTER
    }
    expect(actual).toEqual(expected)
  })

  it("should create DECREASE_COUNTER", () => {
    const actual = decreaseCounter()
    const expected = {
      type: DECREASE_COUNTER
    }

  })

  it("should create RESET_COUNTER", () => {
    const actual = resetCounter()
    const expected = {
      type: RESET_COUNTER
    }
  })
})
