import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBefredwoGwaaq7qY0IifJg6uBRf8vW23Q",
    authDomain: "teamvotingapp-17da3.firebaseapp.com",
    projectId: "teamvotingapp-17da3",
    storageBucket: "teamvotingapp-17da3.appspot.com",
    messagingSenderId: "318165060767",
    appId: "1:318165060767:web:d8bf0fee1c541187a0e6aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();