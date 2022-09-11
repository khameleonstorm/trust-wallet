import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUG5SiR6nYA4UkO-KMgqsMZmak6EJxOas",
  authDomain: "trustwallettk.firebaseapp.com",
  projectId: "trustwallettk",
  storageBucket: "trustwallettk.appspot.com",
  messagingSenderId: "317088761904",
  appId: "1:317088761904:web:8bbf04e95da213e43b05f5"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); 

// init services
  const db = getFirestore(app)

  
  export { db }