import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBukKzGDJZafVBk0j4dJo1N0jKPub76RBA",
  authDomain: "fir-9288e.firebaseapp.com",
  projectId: "fir-9288e",
  storageBucket: "fir-9288e.appspot.com",
  messagingSenderId: "313046683604",
  appId: "1:313046683604:web:98a1fdee87daf80ce21041",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
