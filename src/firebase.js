// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAuH7tVC9pXhx3Qgs-Y_uSr753OTXeUdyI",
    authDomain: "juno-project-five-730f7.firebaseapp.com",
    databaseURL: "https://juno-project-five-730f7.firebaseio.com",
    projectId: "juno-project-five-730f7",
    storageBucket: "juno-project-five-730f7.appspot.com",
    messagingSenderId: "502626620430",
    appId: "1:502626620430:web:7d11e78e3f38fb5b8b185f"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;








