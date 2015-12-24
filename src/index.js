import styles from 'css/index'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import App from './App'
import Hello from './Hello'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="hello/:id" component={Hello}/>
    </Route>
  </Router>
), document.getElementById('root'))
