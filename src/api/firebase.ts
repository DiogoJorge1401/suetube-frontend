import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm7mKln-wmhhUOTikcvm1MMTgCCMvdaKU",
  authDomain: "suetube-de0a6.firebaseapp.com",
  projectId: "suetube-de0a6",
  storageBucket: "suetube-de0a6.appspot.com",
  messagingSenderId: "524798731157",
  appId: "1:524798731157:web:fd5ebbe6c09e123c544c9c"
};

export const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()
export const auth = getAuth(app)