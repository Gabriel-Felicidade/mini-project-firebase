        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
        import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCtuQT5J2Ji0io3YBEatx8wH99J5NBp_oQ",
            authDomain: "aula-firebase-4f37d.firebaseapp.com",
            projectId: "aula-firebase-4f37d",
            storageBucket: "aula-firebase-4f37d.firebasestorage.app",
            messagingSenderId: "758059636043",
            appId: "1:758059636043:web:a89e856bbc51f94f9d84ce",
            measurementId: "G-4X22XB3239"
          };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);


        document.getElementById('loginForm').addEventListener('submit',(e)=>{
        //Trata(previne) eventos padrão do formulário
        e.preventDefault()

        const email = document.getElementById('email').value
        const senha = document.getElementById('senha').value

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "produtos.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Dados inválidos")
        });
    })

    document.getElementById('google').addEventListener('click', ()=>{

        //criar instancia do google
        const provider = new GoogleAuthProvider();

        //chama metodo do login
        signInWithPopup(auth, provider)
        .then((result) => {

            //se sucesso redireciona para produtos
            window.location.href = "produtos.html"
        }).catch((error) => {
            //se nao, mostra o erro
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
        });

    })

