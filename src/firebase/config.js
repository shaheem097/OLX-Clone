import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBX6x_iSWGvZ6sDT3kv8sqJUrkuZZcodgU",
    authDomain: "olx-clone-2f7d4.firebaseapp.com",
    projectId: "olx-clone-2f7d4",
    storageBucket: "olx-clone-2f7d4.appspot.com",
    messagingSenderId: "39362022037",
    appId: "1:39362022037:web:08392eaa29834a5fa3e99c",
    measurementId: "G-NJRDVFYSKX"
  };

  export default firebase.initializeApp(firebaseConfig)