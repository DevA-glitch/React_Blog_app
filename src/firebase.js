import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvnBvY-l0RYkfShD4dD2elBS6wvHM_ljU",
  authDomain: "react-registration-9ec23.firebaseapp.com",
  projectId: "react-registration-9ec23",
  storageBucket: "react-registration-9ec23.appspot.com",
  messagingSenderId: "1040084475993",
  appId: "1:1040084475993:web:44533d250aebd8d0195148",
  measurementId: "G-XFDTMPZG19"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
