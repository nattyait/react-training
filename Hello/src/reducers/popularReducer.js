
const initialState = {
  shots: [],
  fetching: false,
  error: undefined
}

// FETCH_POPULAR_SUCCESS, shots: [shots, shots]
// shot: [] => [shot, shot, shot]
// fetching: false

export default function popularReducer(state= initialState, action) {
  switch (action.type) {
    case 'FETCH_POPULAR_SUCCESS':
    //return Object.assign({ a: 0}, { a: 1}, {b: 2}) /// { a: 1}, {b: 2}
    const Ids = action.shots.map(function(shot){
      return shot.id
    }) // [1,2,3,4]
    return Object.assign( {}, state, {
      shots: Ids,
      fetching: false
    })
      break;
    default:
  }
  return state
}
