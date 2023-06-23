import React from 'react'
import ReactDOM from 'react-dom/client'
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyB4P9ZNPQaYq4Jd4e9wVapHLek7n1wNVMQ",
  authDomain: "bem-pay.firebaseapp.com",
  projectId: "bem-pay",
  storageBucket: "bem-pay.appspot.com",
  messagingSenderId: "854494205479",
  appId: "1:854494205479:web:e164603e956acfff176002",
  measurementId: "G-1JSNH5TLB9"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(
  auth, 'cristianoquichindo2@gmail.com', 'etumudietu2512'
)
.then(user => console.log(user))
.catch(error => console.log('error', error));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
