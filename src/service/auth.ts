import { UserCredential, getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAZArOEaGFKrigURlOPpgG0CnuA4weAOiY",
    authDomain: "michaelwlodawsky-homepage.firebaseapp.com",
    projectId: "michaelwlodawsky-homepage",
    storageBucket: "michaelwlodawsky-homepage.appspot.com",
    messagingSenderId: "1025690015406",
    appId: "1:1025690015406:web:c07e98e4aee696d1f7bf3f",
    measurementId: "G-G761Q82M2Q"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function anonAuth(): Promise<UserCredential> {
    return signInAnonymously(auth)
}