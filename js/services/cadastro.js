import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCtuQT5J2Ji0io3YBEatx8wH99J5NBp_oQ",
    authDomain: "aula-firebase-4f37d.firebaseapp.com",
    projectId: "aula-firebase-4f37d",
    storageBucket: "aula-firebase-4f37d.firebasestorage.app",
    messagingSenderId: "758059636043",
    appId: "1:758059636043:web:a89e856bbc51f94f9d84ce",
    measurementId: "G-4X22XB3239"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById('cadastroForm').addEventListener('submit',(e)=>{
    //Trata(previne) eventos padrão do formulário
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confirmarSenha = document.getElementById('confirmarSenha').value

    if(senha !== confirmarSenha){
        window.alert('Senhas não se coincidem')
        return
    }

    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        window.location.href = "home.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
})