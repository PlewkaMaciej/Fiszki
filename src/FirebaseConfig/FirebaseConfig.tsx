import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAbzoROT61PCGdE28iUwyTxSbgZcZdFkCY",
  authDomain: "cardapp-4afc6.firebaseapp.com",
  databaseURL:
    "https://cardapp-4afc6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cardapp-4afc6",
  storageBucket: "cardapp-4afc6.appspot.com",
  messagingSenderId: "12395776325",
  appId: "1:12395776325:web:272fa071af5cda6c51d62c",
  measurementId: "G-GZRHXGP0R2",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
