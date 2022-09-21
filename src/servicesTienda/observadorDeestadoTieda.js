import {getAuth, onAuthStateChanged }from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
let botonSalir = document.getElementById("botonSalir")
let linkReg = document.getElementById("linkReg")
let usuario = document.getElementById("usuario")
let botonModal = document.getElementById("botonModal")
let modalClose = document.getElementById("exampleModal")
let carrito = document.getElementById("carrito")
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("estoy adentro")
    const uid = user.uid;
    let singIn=document.getElementById("singIn")
    console.log(singIn)
    //singIn.textContent=user.email
    botonSalir.classList.remove("d-none")
   
    linkReg.classList.add("d-none")
    botonModal.classList.add("d-none")
    usuario.classList.remove("d-none")
    modalClose.classList.add("d-none")
    carrito.classList.remove("d-none")
    usuario.textContent = user.email
  
    
    


    // ...
  } else {
    console.log("estoy afuera")
    botonSalir.classList.add("d-none")
    usuario.classList.add("d-none")
    carrito.classList.add("d-none")
    linkReg.classList.remove("d-none")
    botonModal.classList.remove("d-none")
    modalClose.classList.remove("d-none")


  }
});