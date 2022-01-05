import firebase from 'firebase/app';
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtdloGqKeNt_SJMGc2lcOt4lOa7TyZciM",
    authDomain: "vue-firebase-d764b.firebaseapp.com",
    databaseURL: "https://vue-firebase-d764b-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-d764b",
    storageBucket: "vue-firebase-d764b.appspot.com",
    messagingSenderId: "738417875516",
    appId: "1:738417875516:web:65fc0011cf06fc4876c139"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();