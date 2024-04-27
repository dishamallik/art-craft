
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfE4Sok9zD4HBk1Nh65A2GgSUUG_VRSTE",
  authDomain: "drawing-painting-1c63e.firebaseapp.com",
  projectId: "drawing-painting-1c63e",
  storageBucket: "drawing-painting-1c63e.appspot.com",
  messagingSenderId: "895195583388",
  appId: "1:895195583388:web:88a591c566dd209c7dae59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth;