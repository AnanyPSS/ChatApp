import React from 'react';
import { Redirect } from 'react-router-dom';
import { CometChatUI } from "./../CometChatWorkspace/src";

export default class CometChatUIComp extends React.Component {

  render() {
    console.log(this.props.show)
    return (
    <div>
      <div style={{width: '1400px', height:'800px' }}>
       {this.props.show ? <CometChatUI /> : <Redirect to="/login" />}
      </div>
    </div>
    );
    }
}