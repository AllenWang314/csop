import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage()

export  {
   storage, firebase as default
 }