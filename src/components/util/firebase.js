// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1rDTRtM6NXAcaRXWSxwL1ORLz3d8fU-Q",
  authDomain: "food-order-app-798cb.firebaseapp.com",
  databaseURL: "https://food-order-app-798cb-default-rtdb.firebaseio.com",
  projectId: "food-order-app-798cb",
  storageBucket: "food-order-app-798cb.appspot.com",
  messagingSenderId: "194834667884",
  appId: "1:194834667884:web:1bae0b8f9a3ade2d6a7b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;