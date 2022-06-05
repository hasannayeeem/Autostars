// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
//     measurementId:process.env.REACT_APP_appId,  
// };
const firebaseConfig = {
  apiKey: "AIzaSyCVS82y64uLhW3LBoxFzYvtcIEJwKQLClc",
  authDomain: "autostars-12123.firebaseapp.com",
  projectId: "autostars-12123",
  storageBucket: "autostars-12123.appspot.com",
  messagingSenderId: "578961803586",
  appId: "1:578961803586:web:ffbc6d5a8e155573d660db",
  measurementId: "G-F8C46WHK4W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



