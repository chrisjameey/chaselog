import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDlMYlj_SP64IOPQWRYfBrPo1FN6Pf0nMw",
    authDomain: "cloud-b7334.firebaseapp.com",
    databaseURL: "https://cloud-b7334.firebaseio.com",
    projectId: "cloud-b7334",
    storageBucket: "cloud-b7334.appspot.com",
    messagingSenderId: "1042706051253",
    appId: "1:1042706051253:web:6c0c622401e2f0644d0efc",
    measurementId: "G-706RGTWYSG"
}

const app = firebase.initializeApp(config);

const db = app.firestore()

export default db;