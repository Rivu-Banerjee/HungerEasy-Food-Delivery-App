import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCW2NsbqH6iJ-qzEiJ_XmKEb5gY1ynCYiU",
  authDomain: "fooddeliveryapp-677cd.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-677cd-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-677cd",
  storageBucket: "fooddeliveryapp-677cd.appspot.com",
  messagingSenderId: "75312314692",
  appId: "1:75312314692:web:94b3642f5df75251743f11"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
