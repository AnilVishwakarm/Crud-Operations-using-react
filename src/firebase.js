import firebase from "firebase";
const firebaseConfig ={

  apiKey: "your firedbase id here",
  authDomain: "crudex-a20a9.firebaseapp.com",
  databaseURL: "https://crudex-a20a9-default-rtdb.firebaseio.com",
  projectId: "crudex-a20a9",
  storageBucket: "crudex-a20a9.appspot.com",
  messagingSenderId: "217658359182",
  appId: "1:217658359182:web:bb2ea2095834485033b8df"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
export default database;
