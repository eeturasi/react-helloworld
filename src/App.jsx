import styles from 'css/App'
import React from 'react'
import { Link } from 'react-router'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1 className={styles.h1}>Hello world!</h1>
        <Link to={`/hello/world`}>A link!</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default App
