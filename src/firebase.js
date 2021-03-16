// copy pasted from firebase config file to here

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWFiP9bzERtwRPX71ojyyucwcSvWpjy1o",
    authDomain: "note-taking-app-c8a2b.firebaseapp.com",
    projectId: "note-taking-app-c8a2b",
    storageBucket: "note-taking-app-c8a2b.appspot.com",
    messagingSenderId: "21526651018",
    appId: "1:21526651018:web:cbd3821b1c09486e584d73",
    measurementId: "G-CV57G34LD4"
});

const db = firebaseApp.firestore();

export default db;