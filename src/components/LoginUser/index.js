import React, { Component } from 'react'
import { CometChat } from "@cometchat-pro/chat"
import { API_CONSTANTS } from '../../api_constants';
import { Link} from 'react-router-dom';

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
        this.props.show()
        console.log(this.props);
        this.props.history.push("/cometchatUI")
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
        <div className="full-body">
          <div className="container">
          <h3 className="title">Login</h3>
          <div className="input-group">
            <label>Enter your registered UID</label>
            <input ref={this.myRefUID} type="text" placeholder="Enter your UID here" />
          </div>
          <div className="login-button">
            <button type="button" onClick={() => this.newlogin()}>Login</button>
          </div>
          <div>
            <Link to="/">
              <h3 className="button">Home</h3>
            </Link>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default LoginUser;