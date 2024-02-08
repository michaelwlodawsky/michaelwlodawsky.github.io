import { UserCredential, getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function anonAuth(): Promise<UserCredential> {
    return signInAnonymously(auth)
}