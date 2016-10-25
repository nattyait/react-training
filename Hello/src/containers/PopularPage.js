import React from 'react'
import ShortList from '../components/ShortList'

import shots from '../data/shots.json'
//console.log(shots)

class PopularPage extends React.Component {
  state = {
    shots: []
  }
  componentDidMount(){
    fetch('https://api.dribbble.com/v1/shots?access_token=890076c326208858658efe077035f56ea2a2b478a438a621f639d6cdd660ea20')
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        shots: json
      })
    })
  }
  render () {
    return (
      <ShortList shots={this.state.shots}/>
    )
  }
}

export default PopularPage
