// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzF0-D3sSeGIgankhE2faQckGMvXySRmY",
    authDomain: "havenapp-new.firebaseapp.com",
    projectId: "havenapp-new",
    storageBucket: "havenapp-new.appspot.com",
    messagingSenderId: "385204723206",
    appId: "1:385204723206:web:5332b1892fb656a320ed87",
    measurementId: "G-G7P9CYKB8E"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
