import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB0GWmDL8BNxST7PytXpTLbvPkfa1JQfJ8",
    authDomain: "live-cricketapp-64779.firebaseapp.com",
    projectId: "live-cricketapp-64779",
    storageBucket: "live-cricketapp-64779.appspot.com",
    messagingSenderId: "954269470249",
    appId: "1:954269470249:web:a78c82ec77ef48d5b71638"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);