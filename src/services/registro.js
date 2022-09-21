import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro = document.getElementById("botonRegistro")
botonRegistro.addEventListener("click", function(evento){
    evento.preventDefault()

    let email = document.getElementById("correo").value
    let password = document.getElementById("password").value
    let formulario = document.getElementById("formulario")

    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
   
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'You successfuly sign up. Enjoy',
      color:`#ffffff`,
      background: `#000000`,
      showConfirmButton: false,
      timer: 2500
    })
    formulario.reset()
    setTimeout(function(){
      window.location.href = "../../index.html"
    }, 2500)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: 'Oops...',
      color:`#ffffff`,
      background: `#000000`,
      text: errorMessage
    })
  });
   
})
