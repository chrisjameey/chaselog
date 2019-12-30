import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDaeZBAYchgWSwzD35ynfZaPLI0cgSaRwI",
    authDomain: "fir-a90c3.firebaseapp.com",
    databaseURL: "https://fir-a90c3.firebaseio.com",
    projectId: "fir-a90c3",
    storageBucket: "fir-a90c3.appspot.com",
    messagingSenderId: "1075115069782",
    appId: "1:1075115069782:web:ec4fbe61ef76a00f5a46f7"
}

const app = firebase.initializeApp(config);

const db = app.firestore()

export default db;