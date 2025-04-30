const firebaseConfig = {
  apiKey: "AIzaSyCtuQT5J2Ji0io3YBEatx8wH99J5NBp_oQ",
  authDomain: "aula-firebase-4f37d.firebaseapp.com",
  projectId: "aula-firebase-4f37d",
  storageBucket: "aula-firebase-4f37d.firebasestorage.app",
  messagingSenderId: "758059636043",
  appId: "1:758059636043:web:a89e856bbc51f94f9d84ce",
  measurementId: "G-4X22XB3239"
};

//inicialização
firebase.initializeApp(firebaseConfig)

//referência do bd
const db = firebase.firestore()