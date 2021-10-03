import firebase from 'firebase/app';

const FireaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA74MlsGp-nxeuyAGMhnScGniOhI_5t8CE",
  authDomain: "benpo-5f6ce.firebaseapp.com",
  databaseURL: "https://benpo-5f6ce-default-rtdb.firebaseio.com/",
  projectId: "benpo-5f6ce",
  storageBucket: "benpo-5f6ce.appspot.com", 
  messagingSenderId: "163691803576",
  appId: "1:163691803576:web:aa54a6ebd7a7bc39e1554d",
  measurementId: "G-R1H5NJ5SMX"
});

const database = FireaseConfig.firestore();

export default database;
