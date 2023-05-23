import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCDsh6ZYlEZhU8dW5p6fXXEUT4Shm8eTTo",
  authDomain: "build-admin-5be93.firebaseapp.com",
  projectId: "build-admin-5be93",
  storageBucket: "build-admin-5be93.appspot.com",
  messagingSenderId: "107245193670",
  appId: "1:107245193670:web:525811a5b7ae395fd5cac7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

export const login = async (e, p) => {
  await signInWithEmailAndPassword(auth, e, p)
};

export const logout = () => signOut(auth);

export const usersRef = collection(db, "users")