import React from 'react'
import ShortList from '../components/ShortList'

import shots from '../data/shots.json'
//console.log(shots)

class PopularPage extends React.Component {
  render () {
    return (
      <ShortList shots={shots}/>
    )
  }
}

export default PopularPage
