import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (  
        <div className="full-body">
          <div className="container">
            <h1 className="title">CometChat</h1>
            <div>
              <Link to="/register">
                <h2 className="button">Register</h2>
              </Link>
              <Link to="/login">
                <h2 className="button">Login</h2>
              </Link>
            </div>
          </div>
        </div>
    )
  }
}

export default HomePage;
