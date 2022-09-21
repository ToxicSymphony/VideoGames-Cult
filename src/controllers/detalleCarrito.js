let carrito = JSON.parse(sessionStorage.getItem("carrito"));

let totalCompra = document.getElementById("totalCompra")

let limpiar = document.getElementById("limpiar")

let factura = document.getElementById("factura");

let columnaBotones2 = document.getElementById("columnaBotones2")

let total = 0

let bandera = true


if (carrito == null) {

  totalCompra.textContent="$0"

  limpiar.classList.add("d-none")

  columnaBotones2.classList.add("d-none")

  let fila = document.createElement("div");
  fila.classList.add("row", "my-5", "justify-content-center");

  let columna = document.createElement("div");
  columna.classList.add("col-12", "col-md-4");

  let imagenCarritoVacio = document.createElement("img");
  imagenCarritoVacio.classList.add("img-fluid", "w-100");
  imagenCarritoVacio.src = "../../assets/img/CarritoVacio.png";

  let mensaje = document.createElement("h1");
  mensaje.classList.add("text-light", "fs-1", "text-center");
  mensaje.textContent = "Your car is empty";

  let boton = document.createElement("a");
  boton.classList.add("btn", "btn-danger", "text-light", "mt-3", "mb-4");
  boton.textContent = "Go back to store";
  boton.href="../views/tienda.html"
  

  columna.appendChild(imagenCarritoVacio);
  columna.appendChild(mensaje);
  columna.appendChild(boton);
  fila.appendChild(columna);
  factura.appendChild(fila);

} else {

  carrito.forEach(function (producto) {
    let fila = document.createElement("div");
    fila.classList.add("row", "my-5", "justify-content-center", "shadow", "p-3", "bg-dark","rounded-3", "border", "border-danger");

    let columnaImg = document.createElement("div");
    columnaImg.classList.add("col-12", "col-md-5");

    let columnaNombrePrecio = document.createElement("div");
    columnaNombrePrecio.classList.add("col-12", "col-md-3","align-self-center", "border-end");


    let columnaCantidadSubtotal = document.createElement("div");
    columnaCantidadSubtotal.classList.add("col-12", "col-md-3", "align-self-center");

    let nombre = document.createElement("h1")
    nombre.classList.add("text-light", "text-center")
    nombre.textContent = producto.nombre

    let cantidad = document.createElement("h4")
    cantidad.classList.add("text-light", "text-center", "bg-danger", "border", "border-light")
    cantidad.textContent = `${producto.cantidad}` 

    let tituloCantidad = document.createElement("h3")
    tituloCantidad.classList.add("text-light", "text-center")
    tituloCantidad.textContent = `Cantidad`
    
    let precio = document.createElement("h3")
    precio.classList.add("text-light", "text-center", "mt-5")
    precio.textContent = `Precio unidad: ${producto.precio}`

    let imagenCarrito = document.createElement("img");
    imagenCarrito.classList.add("img-fluid", "w-100");
    imagenCarrito.src = producto.foto;

    let tituloSubtotal = document.createElement("h3")
    tituloSubtotal.classList.add("text-light", "text-center")
    tituloSubtotal.textContent = `Subtotal`

    let subtotal = document.createElement("h4")
    subtotal.classList.add("fw-bold", "text-light", "text-center", "bg-danger", "border", "border-light")

    // console.log(banana*producto.cantidad)

    let subtotalCalculado = producto.precio.split("$")[1]*producto.cantidad
    console.log(subtotalCalculado)

    let text = subtotalCalculado.toLocaleString("en-US", {style:"currency", currency:"USD"});
    subtotal.textContent = `${text}`

    total = total+subtotalCalculado

    

    
    limpiar.addEventListener("click", function(evento){
      sessionStorage.removeItem("carrito")
      window.location.href="../views/carrito.html"
      
      totalCompra.textContent="$0"
  
    })

    // if (producto.nombre == producto.nombre) {

    //     subtotal = banana*producto.cantidad
        
    // }

    // let total = subtotalCalculado+subtotalCalculado
    // let totalCompra = documnet.getElementById("totalCompra")
    // totalCompra.textContent = total

    columnaImg.appendChild(imagenCarrito)
    columnaNombrePrecio.appendChild(nombre)
    columnaNombrePrecio.appendChild(precio)
    columnaCantidadSubtotal.appendChild(tituloCantidad)
    columnaCantidadSubtotal.appendChild(cantidad)
    columnaCantidadSubtotal.appendChild(tituloSubtotal)
    columnaCantidadSubtotal.appendChild(subtotal)
    fila.appendChild(columnaImg)
    fila.appendChild(columnaNombrePrecio)
    fila.appendChild(columnaCantidadSubtotal)
    factura.appendChild(fila)

  });

  let text = total.toLocaleString("en-US", {style:"currency", currency:"USD"});

  totalCompra.textContent = `${text}`

  let conversor = document.getElementById("conversor")
  conversor.classList.add("btn", "btn-danger", "text-light")
  conversor.textContent = "Convert to COP"

  conversor.addEventListener("click",function(evento){

    

    let usd = 4415
    let operacion = 0

    operacion = total * (usd/1)

    let text = operacion.toLocaleString("de-De");

    totalCompra.textContent = `$${text}`

    conversor.textContent = "Convert to USD"

    if (bandera) {

      let text = total.toLocaleString("en-US", {style:"currency", currency:"USD"});

      conversor.addEventListener("click",function(){
        totalCompra.textContent = `${text}`
        conversor.textContent = "Convert to COP"
      })

      bandera = !bandera
      
    } else {
      conversor.addEventListener("click",function(){
        let text = operacion.toLocaleString("de-De");
        totalCompra.textContent = `$${text}`
        conversor.textContent = "Convert to USD"
      })

      bandera = !bandera
    }

  })


}



if (JSON.parse(sessionStorage.getItem("carrito")) != null) {

    carrito=JSON.parse(sessionStorage.getItem("carrito"))

    let pildora = document.getElementById("pildora");
    pildora.textContent=carrito.length
    
} else {
    carrito=[]
}

