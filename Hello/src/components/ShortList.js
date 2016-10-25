import React from 'react'
import ShortListItem from './ShortListItem'

//functon ShortList ({shots})
function ShortList (props) {
  const { shots } = props //deconstruct
  const listItems = shots.map(function(shot){
    return <ShortListItem shot={shot} key={shot.id}/>
  })
  return (
    <div>
      { listItems }
    </div>
  )
}

export default ShortList
