import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtbh3oascLG9JPj8qwaNKslN1xo8WrUGY',
  authDomain: 'cart-app-a3507.firebaseapp.com',
  projectId: 'cart-app-a3507',
  storageBucket: 'cart-app-a3507.appspot.com',
  messagingSenderId: '544852752186',
  appId: '1:544852752186:web:490aeee5c8073fb0630203'
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
