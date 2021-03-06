import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB3z0VsG0Wgqyh7zUFLWWfxa8cOUDHPG9c",
    authDomain: "massenger-4a0e3.firebaseapp.com",
    projectId: "massenger-4a0e3",
    storageBucket: "massenger-4a0e3.appspot.com",
    messagingSenderId: "473160415155",
    appId: "1:473160415155:web:978e29c05e5e58e5213dc6",
    measurementId: "G-MHNX8SXNZ6"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;