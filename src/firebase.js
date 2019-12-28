import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDinqTnPJGlK3atOfjoXPQvgz-R1pvnO2M",
    authDomain: "capital-4adfd.firebaseapp.com",
    databaseURL: "https://capital-4adfd.firebaseio.com",
    projectId: "capital-4adfd",
    storageBucket: "capital-4adfd.appspot.com",
    messagingSenderId: "605300834564",
    appId: "1:605300834564:web:4a419ce45bfa512a805051"
}

const app = firebase.initializeApp(config);

const db = app.firestore()

export default db;