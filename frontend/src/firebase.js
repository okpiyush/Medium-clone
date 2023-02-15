
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAkUoPoVPP6Q5wK5P4VTlLZPoN8NU2hPg",
  authDomain: "medium-clone-123123.firebaseapp.com",
  projectId: "medium-clone-123123",
  storageBucket: "medium-clone-123123.appspot.com",
  messagingSenderId: "487602152261",
  appId: "1:487602152261:web:a97496a2161b0a37b9d42c",
  measurementId: "G-W0KPL7K1EE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
