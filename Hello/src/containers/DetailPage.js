import React from 'react'
import { connect } from 'react-redux'
class DetailPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Detail Page {this.props.shot.title}</h1>
      </div>
    )
  }
}
//ownProps = ที่ข้างนอก parse มาให้มัน
const mapStoreStateToProps = (state, ownProps) => {
  return {
    shot: state.shotById[ownProps.params.id]
  }
}

export default connect(mapStoreStateToProps)(DetailPage)
