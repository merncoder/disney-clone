import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// doesnt work
// //import firebse from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB61m9uDTkgH6dqL7nBuKK8IDrDzc5MM1Y",
  authDomain: "disney-clone-7ab48.firebaseapp.com",
  projectId: "disney-clone-7ab48",
  storageBucket: "disney-clone-7ab48.appspot.com",
  messagingSenderId: "234241364024",
  appId: "1:234241364024:web:9bb65cced333ab8dec16cd",
  measurementId: "G-6HX6PTCXD2",
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

// // const analytics = getAnalytics(app);
// const storage = firebase.storage();
export { auth, provider };
export default db;
