
import { INCREASE_COUNTER } from '../actions/counterActions'

//export default because want to export only one thing
function counterReducer(state, action){
  switch(action.type){
    case INCREASE_COUNTER:
    return state = 1
  }
  return 0
}

export default counterReducer
