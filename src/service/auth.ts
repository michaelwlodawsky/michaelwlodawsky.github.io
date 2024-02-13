import { UserCredential, getAuth, signInAnonymously, connectAuthEmulator } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
  
const app = initializeApp(firebaseConfig);

export function anonAuth(): Promise<UserCredential> {
    const auth = getAuth(app);
    if (process.env.NODE_ENV != 'production') {
        connectAuthEmulator(auth, 'http://localhost:9099');
    }
    
    return signInAnonymously(auth);
}