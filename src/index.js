import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig =
// Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyC5oXD2EzDNVukRB4I4Z_ZXqm0dGNJoLkc",
        authDomain: "farebase-start-project.firebaseapp.com",
        databaseURL: "https://farebase-start-project-default-rtdb.firebaseio.com",
        projectId: "farebase-start-project",
        storageBucket: "farebase-start-project.appspot.com",
        messagingSenderId: "910455650761",
        appId: "1:910455650761:web:afb50e353017fde27b1018"
    });

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore();

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

