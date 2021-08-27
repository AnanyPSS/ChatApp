import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import HomePage from './components/HomePage'
import CometChatUIComp from './components/CometChatUIComp'

export default class App extends Component {
  state = {
    show: false
  }

  checkState = () => {
    this.setState({
      show: true
    },
    () => console.log(this.state))
  }

  falseState =() => {
    this.setState({
      show:false
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={CreateUser} />
            <Route exact path="/login"  render={(props) => <LoginUser show={this.checkState} {...props} />} />
            <Route exact path="/cometchatUI"  render={(props) => <CometChatUIComp show={this.state.show} {...props} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
