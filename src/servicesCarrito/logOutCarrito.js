import { getAuth, signOut }from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";



let botonSalir = document.getElementById("botonSalir")


botonSalir.addEventListener("click", function (evento) {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            title: 'See you later Cultist',
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
          setTimeout(function(){
            window.location.href = "../../index.html"
          }, 2500)
    }).catch((error) => {
        // An error happened.

    });

})