import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (  
        <div>
          <h1>CometChat</h1>
          <Link to="/register">
            <h2>Register</h2>
          </Link>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        </div>
    )
  }
}

export default HomePage;
