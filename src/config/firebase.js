
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDs8aNk37P6-7ujarvthc1uVkn0Rj-eUQ0",
  authDomain: "psicologia-63ca8.firebaseapp.com",
  projectId: "psicologia-63ca8",
  storageBucket: "psicologia-63ca8.appspot.com",
  messagingSenderId: "519545586277",
  appId: "1:519545586277:web:a2e49255b6ade6b1e8fc8c",
  measurementId: "G-FYWVKFZSHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// USE A VERSÃO MODULAR DO FIREBASE!!!
export const auth = getAuth(app);
export const database = getDatabase(app);