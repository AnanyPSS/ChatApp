import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CometChat } from "@cometchat-pro/chat";
import {API_CONSTANTS} from './api_constants';

const appID = API_CONSTANTS.APP_ID;
const region = API_CONSTANTS.REGION;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
