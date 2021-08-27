import React, { Component } from 'react'

export default class LogoutBtn extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.clickLogout()}>Logout</button>
      </div>
    )
  }
}


