import React from 'react'
import ShortList from '../components/ShortList'

// shots from '../data/shots.json'
import fetchShots from '../api/fetchShots'
//console.log(shots)

class PopularPage extends React.Component {
  state = {
    shots: []
  }
  componentDidMount(){
    fetchShots()
    .then( (shots) => {
      this.setState({ shots })
    })
  }
  render () {
    return (
      <ShortList shots={this.state.shots}/>
    )
  }
}

export default PopularPage
