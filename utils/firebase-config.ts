 
import { initializeApp } from "firebase/app"; 
import { DatabaseReference, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAogXylPBPZRszvhusb6nNG4FLWtAzMNao",
    authDomain: "clothing-176c9.firebaseapp.com",
    projectId: "clothing-176c9",
    storageBucket: "clothing-176c9.appspot.com",
    messagingSenderId: "754096636516",
    appId: "1:754096636516:web:292dd24b6c009462035571"
};

 
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const getReference = (path: string): DatabaseReference => ref(database, path)
