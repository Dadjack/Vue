import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO6qC6mj1cjAhjbkGIaTEqh9B_leiUqOw",
    authDomain: "vue-fil-rouge-949d0.firebaseapp.com",
    databaseURL: "https://vue-fil-rouge-949d0-default-rtdb.firebaseio.com",
    projectId: "vue-fil-rouge-949d0",
    storageBucket: "vue-fil-rouge-949d0.appspot.com",
    messagingSenderId: "600596592175",
    appId: "1:600596592175:web:3560968c61b82d45bb38da"
    };

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
