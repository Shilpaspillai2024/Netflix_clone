import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCqN4XuFdQD2EkRH38tY8lLvgkYs2SBp2w",
  authDomain: "netflixclone-3fa0a.firebaseapp.com",
  projectId: "netflixclone-3fa0a",
  storageBucket: "netflixclone-3fa0a.appspot.com",
  messagingSenderId: "448473390268",
  appId: "1:448473390268:web:12bdfb83c42fc2e4d144b9",
};

// Initialize Firebase app, auth, and Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

type SignupParams = {
  name: string;
  email: string;
  password: string;
};

const signup = async ({ name, email, password }: SignupParams) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("Signup successful!");
  } catch (error) {
    handleError(error);
  }
};

type LoginParams = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginParams) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error) {
    handleError(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logout successful!");
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error);
    const errorMessage =
      error.message.split("/")[1]?.split("-").join(" ") ||
      "An unknown error occurred.";
    toast.error(errorMessage);
  } else {
    console.error("An unknown error occurred.");
    toast.error("An unknown error occurred.");
  }
};

export { auth, db, login, signup, logout };
