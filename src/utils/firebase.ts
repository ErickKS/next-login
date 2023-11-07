import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

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

// EMAIL & PASSWORD

export async function signInWithCredentials(email: string, password: string) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);

    return "success";
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code } = error;
      console.log(code);

      return "error";
    }
  }
}

export async function signUpWithCredentials(email: string, password: string) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log(response);

    return "success";
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code } = error;
      console.log(code);

      return "error";
    }
  }
}

// GOOGLE

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const response = await signInWithPopup(auth, provider);
    console.log(response);

    return "success";
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code } = error;
      console.log(code);

      return "error";
    }
  }
}
