import React from 'react';
import { Redirect } from 'react-router-dom';
import { CometChatUI } from "./../CometChatWorkspace/src";

export default class CometChatUIComp extends React.Component {

  render() {
    console.log(this.props.show)
    return (
    <div>
      <div style={{width: '100%', height:'100%' }}>
       {this.props.show ? <CometChatUI /> : <Redirect to="/login" />}
      </div>
    </div>
    );
    }
}