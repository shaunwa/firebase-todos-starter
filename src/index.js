import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyDV6yZLdZI-sQYFAH9bagJfWpO3WpJShgA",
    authDomain: "todos-app-dec2020.firebaseapp.com",
    projectId: "todos-app-dec2020",
    storageBucket: "todos-app-dec2020.appspot.com",
    messagingSenderId: "19942928124",
    appId: "1:19942928124:web:4e1c641d88e9c0f142f179"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
