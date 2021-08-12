import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA8xAzm5GOR_l87HDa0SViUkQp9SgZi7IU",
    authDomain: "facebook-messenger-clone-ac320.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-ac320-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-ac320",
    storageBucket: "facebook-messenger-clone-ac320.appspot.com",
    messagingSenderId: "204809939907",
    appId: "1:204809939907:web:24b153663983884f1aab76",
    measurementId: "G-XCSY5Z0WX5"
  });

  const db = firebaseApp.firestore();

  export default db ;


