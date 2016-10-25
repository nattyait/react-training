
// FETCH_POPULAR_SUCCESS, shots: [shots, shots]
// {} => {1: shot, 2: shot}

export default function shotById(state= {}, action) {
  switch (action.type) {
    case 'FETCH_POPULAR_SUCCESS':
      const idShotMap = action.shots.reduce(function(map, shot){
        map[shot.id] = shot
        return map // {1: shot, 2: shot}
      }, {})

      return Object.assign({}, state, idShotMap) // id ซ้ำกัน ของที่โหลดมาใหม่ต้องใหม่กว่า

      break;
    default:
      return state
  }
}
