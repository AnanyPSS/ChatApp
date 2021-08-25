import React from 'react';
import { CometChatUI } from "./../CometChatWorkspace/src";

export default class CometChatUIComp extends React.Component {
  
  render() {

    return (
      <div style={{width: '800px', height:'800px' }}>
        <CometChatUI />
      </div>
    );
    }
}