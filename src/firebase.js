import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuVxYSJab9L8KceFB8LM1kUI-BvH5C6iw",
  authDomain: "clone-37e33.firebaseapp.com",
  projectId: "clone-37e33",
  storageBucket: "clone-37e33.appspot.com",
  messagingSenderId: "442847359683",
  appId: "1:442847359683:web:09638f261bd0d77896a876",
  measurementId: "G-H9R3CQ7KVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
