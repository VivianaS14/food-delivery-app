// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjWjtDBvPD4DXo5ybWF0pJDJHdxw4kKbc",
  authDomain: "food-delivery-app-f34e6.firebaseapp.com",
  projectId: "food-delivery-app-f34e6",
  storageBucket: "food-delivery-app-f34e6.appspot.com",
  messagingSenderId: "496274283941",
  appId: "1:496274283941:web:d5a095a5830a322a969c4c",
  measurementId: "G-6ZEE7DTJ6R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
