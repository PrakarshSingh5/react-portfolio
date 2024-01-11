
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAEF_ChKGZrckZUa0uCJ64HQhsdyxHIos",
  authDomain: "prakarsh-portfolio.firebaseapp.com",
  projectId: "prakarsh-portfolio",
  storageBucket: "prakarsh-portfolio.appspot.com",
  messagingSenderId: "982628975046",
  appId: "1:982628975046:web:ff3015332710d63d7a72c7",
  
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore();