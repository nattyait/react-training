
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

//ต้องใส่ state = {} คือ initial ไม่งั้นจะทำให้ state เป็น undefined
// function rootReducer(state = {}, action) {
//   return {
//     counter: counterReducer(state.counter, action)
//   }
// }
//
// export default rootReducer

export default combineReducers({
  counter: counterReducer
})
