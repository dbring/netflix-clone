// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3SwWHn_TRrWpaRDNaLLO0_jHYBE0TH8",
  authDomain: "netflix-clone-fe14e.firebaseapp.com",
  projectId: "netflix-clone-fe14e",
  storageBucket: "netflix-clone-fe14e.appspot.com",
  messagingSenderId: "408282129660",
  appId: "1:408282129660:web:5af6d83046b5bc1fe1e379"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth();

export default app;
export { auth, db };