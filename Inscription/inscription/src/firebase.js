import firebase from 'firebase/app';
import "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

// Initialize Firebase
    firebase.initializeApp(config);
    const analytics = getAnalytics(app);
    export default firebase.database();
