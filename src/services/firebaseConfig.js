import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRWblo-efdU8XYKX5rXCQmyIFn81Z2lxo",
  authDomain: "superpupper-3faa6.firebaseapp.com",
  databaseURL: "https://superpupper-3faa6-default-rtdb.firebaseio.com",
  projectId: "superpupper-3faa6",
  storageBucket: "superpupper-3faa6.appspot.com",
  messagingSenderId: "81139508853",
  appId: "1:81139508853:web:4b5642a750d33ace253a3c"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;