import React from 'react'

class Provider extends React.Component {

  // ลูกเรียก getContext มาแล้วจะได้ store คืนไป
    getChildContext() {
      return {
        store: this.props.store
      }
    }
    render () {
      //tag ด้านใน provider
      return this.props.children
    }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
}

export default Provider
