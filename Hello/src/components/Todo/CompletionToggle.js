import React from 'react'

class CompletionToggle extends React.Component{
  render(){
    return (
      <div>
        <input type="checkbox"
          checked={this.props.show}
          onChange={this.props.onValueChange}/>
        Show Completed
      </div>
    )
  }
}

export default CompletionToggle
