let producto = JSON.parse(sessionStorage.getItem("producto"));

let carritoMemoria = JSON.parse(sessionStorage.getItem("carrito"))

let carrito

if (JSON.parse(sessionStorage.getItem("carrito")) != null) {

    carrito=JSON.parse(sessionStorage.getItem("carrito"))

    let pildora = document.getElementById("pildora");
    pildora.textContent=carrito.length
    
} else {
    carrito=[]
}

console.log(carritoMemoria)

let nombreInfo = document.getElementById("nombreInfo");
nombreInfo.textContent = producto.nombre;
let descripcionInfo = document.getElementById("descripcionInfo");
descripcionInfo.textContent = producto.descripcion;
let precioInfo = document.getElementById("precioInfo");
precioInfo.textContent = producto.precio;
let contenedorEstrellas = document.getElementById("contenedorEstrellas")
let popularidadInfo = document.getElementById("popularidad")
for (let i = 1; i <= producto.popularidad; i++) {
  let estrellas = document.createElement("i");
  estrellas.classList.add("bi", "bi-star-fill", "text-warning");
  contenedorEstrellas.appendChild(estrellas);
}
let imagenInfo = document.getElementById("imagenInfo")
imagenInfo.src = producto.foto

// siempre que vaya a guardar en memoria local debo colocar lo siguiente

console.log(pildora.textContent);

let agregarProducto = document.getElementById("agregar");

agregarProducto.addEventListener("click", function (evento) {

  let cantidad = document.getElementById("cantidadProducto");

  cantidad = cantidad.value;

  console.log("agregaste" + cantidad);

  producto.cantidad = cantidad;

  console.log(producto);

  carrito.push(producto);
  console.log(carrito);

  sessionStorage.setItem("carrito", JSON.stringify(carrito))

  let cantidadCarrito = carrito.length;

  pildora.textContent = cantidadCarrito;


});
