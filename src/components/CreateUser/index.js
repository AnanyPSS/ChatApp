import React, { Component } from 'react'
import { API_CONSTANTS } from '../../api_constants';
import { CometChat } from "@cometchat-pro/chat";
import { Link } from 'react-router-dom';

class CreateUser extends Component {

  constructor(props) {
    super(props);

    this.myRefName = React.createRef();
    this.myRefUID = React.createRef();
  }

  newUser = (uid, name) => {
    uid = this.myRefUID.current.value;
    name = this.myRefName.current.value;
    
    let authKey = API_CONSTANTS.AUTH_KEY;

    var user = new CometChat.User(uid);

    user.setName(name);

    CometChat.createUser(user, authKey).then(
      user => {
          console.log("user created", user);
          if(user) {
            return alert("User Created");
          }
      },error => {
          console.log("error", error);
      }
)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input ref={this.myRefName} type="text" placeholder="Enter your name here" />
        </div>
        <div>
          <input ref={this.myRefUID} type="text" placeholder="Enter your UID here" />
          <p>*** UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.</p>
        </div>
        <div>
          <button type="button" onClick={() => this.newUser()}>Create User</button>
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

export default CreateUser;