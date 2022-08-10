import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpfxrNuo81L6NDVfqR5Y1BGoEtIQhd6Og",
  authDomain: "biblioteca1-5efd6.firebaseapp.com",
  projectId: "biblioteca1-5efd6",
  storageBucket: "biblioteca1-5efd6.appspot.com",
  messagingSenderId: "633712367526",
  appId: "1:633712367526:web:e33c5281d19402a7e2e167"
};


export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);
export const auth = getAuth(app); 

