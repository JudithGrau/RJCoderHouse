import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvVpW0WNInZwcOnVSImrFdduI7KUrLlfg",
    authDomain: "coderhouse-js.firebaseapp.com",
    projectId: "coderhouse-js",
    storageBucket: "coderhouse-js.appspot.com",
    messagingSenderId: "319158728936",
    appId: "1:319158728936:web:d15ace9a89d0cd3fe3315d"
    };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}