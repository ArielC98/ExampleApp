
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/firestore';
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJ-JeIERAHRMc-cuPjNsx0rK34LfIQHP8",
    authDomain: "gestionnotas-807d0.firebaseapp.com",
    databaseURL: "https://gestionnotas-807d0-default-rtdb.firebaseio.com",
    projectId: "gestionnotas-807d0",
    storageBucket: "gestionnotas-807d0.appspot.com",
    messagingSenderId: "242345618877",
    appId: "1:242345618877:web:e3b7d8a2a244b29f5bf6d4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

