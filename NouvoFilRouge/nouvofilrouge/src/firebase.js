import firebase from 'firebase/app';
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO6qC6mj1cjAhjbkGIaTEqh9B_leiUqOw",
    authDomain: "vue-fil-rouge-949d0.firebaseapp.com",
    databaseURL: "https://vue-fil-rouge-949d0-default-rtdb.firebaseio.com",
    projectId: "vue-fil-rouge-949d0",
    storageBucket: "vue-fil-rouge-949d0.appspot.com",
    messagingSenderId: "600596592175",
    appId: "1:600596592175:web:3560968c61b82d45bb38da"
    };

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase.database();