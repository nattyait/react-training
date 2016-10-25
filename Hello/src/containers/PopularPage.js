import React from 'react'
import ShortList from '../components/ShortList'

import { connect } from 'react-redux'

// shots from '../data/shots.json'
import fetchShots from '../api/fetchShots'
//console.log(shots)

class PopularPage extends React.Component {
  componentDidMount(){
    fetchShots()
    .then( (shots) => {
      this.props.dispatch({ type: 'FETCH_POPULAR_SUCCESS', shots: shots })
    })
  }
  render () {
    return (
      <ShortList shots={this.props.shots}/>
    )
  }
}
const mapStoreStateToProps = (state) => {
  return {
    shots: state.popular.shots.map( (id) => state.shotById[id] )
  }
}
export default connect(mapStoreStateToProps)(PopularPage)
