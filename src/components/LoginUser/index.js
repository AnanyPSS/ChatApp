import React, { Component } from 'react'
import { CometChat } from "@cometchat-pro/chat"
import { API_CONSTANTS } from '../../api_constants';
import { Link } from 'react-router-dom';

class LoginUser extends Component {

  constructor(props) {
    super(props);

    this.myRefUID = React.createRef();
  }

  newlogin = (uid) => {
    uid = this.myRefUID.current.value;

    var UID = uid;
    var authKey = API_CONSTANTS.AUTH_KEY;

    CometChat.login(UID, authKey).then(
      User => {
        console.log("Login Successful:", { User });
        // User loged in successfully.
      },
      error => {
        console.log("Login failed with exception:", { error });
        // User login failed, check error and take appropriate action.
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input ref={this.myRefUID} type="text" placeholder="Enter your UID here" />
          <p>Enter your registered UID.</p>
        </div>
        <div>
        <button type="button" onClick={() => this.newlogin()}>Login</button>
        </div>
        <div>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginUser;