import React from 'react'

var Hello = React.createClass({
  render() {
    return (
      <div>
        <h2>Hi {this.props.params.id}!</h2>
      </div>
    )
  }
})

export default Hello
