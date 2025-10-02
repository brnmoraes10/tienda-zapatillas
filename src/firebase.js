import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Reemplaza esto con la configuración de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDLvuYv65AphkwVz1HaxrGC8Po8F1Ywgg",
  authDomain: "productos-z-38a0c.firebaseapp.com",
  projectId: "productos-z-38a0c",
  storageBucket: "productos-z-38a0c.appspot.com",
  messagingSenderId: "638569718723",
  appId: "1:638569718723:web:b597f56fee89f27a84d376"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);