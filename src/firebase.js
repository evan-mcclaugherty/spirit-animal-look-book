import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCLysLvxCNE7lJkPIe6iRKxVF1V33bYQwc",
    authDomain: "pepper-554a4.firebaseapp.com",
    databaseURL: "https://pepper-554a4.firebaseio.com",
    projectId: "pepper-554a4",
    storageBucket: "pepper-554a4.appspot.com",
    messagingSenderId: "746210783035"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
