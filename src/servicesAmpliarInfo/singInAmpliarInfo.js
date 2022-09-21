import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let botonEnter = document.getElementById("botonEnter")

botonEnter.addEventListener("click", function (evento) {

  evento.preventDefault()

  console.log("estoy escuchando el click");


  let email = document.getElementById("correoEnter").value
  let password = document.getElementById("passwordEnter").value
  let formularioEnter= document.getElementById("formularioEnter")
  console.log(email + password);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      Swal.fire({
        title: 'Welcome Cultist',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        color:`#ffffff`,
        background: `#000000`,
        timer: 2500
      })
      formularioEnter.reset()
      setTimeout(function(){
        window.location.href = "../views/ampliarInfo.html"
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
