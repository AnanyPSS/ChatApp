import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import HomePage from './components/HomePage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={CreateUser} />
            <Route path="/login" component={LoginUser} />
          </Switch>
        </div>
      </Router>
    )
  }
}
