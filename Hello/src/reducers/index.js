
import { combineReducers } from 'redux'
// import counterReducer from './counterReducer'
// import todoReducer from './todoReducer'
import popularReducer from './popularReducer'
import shotById from './shotById'

//ต้องใส่ state = {} คือ initial ไม่งั้นจะทำให้ state เป็น undefined
// function rootReducer(state = {}, action) {
//   return {
//     counter: counterReducer(state.counter, action)
//   }
// }
//
// export default rootReducer

export default combineReducers({
  // counter: counterReducer,
  // todo: todoReducer
  popular: popularReducer,
  shotById: shotById
})
