let contenedorProducto = document.getElementById("container")

let informacionProducto = {

}

contenedorProducto.addEventListener("click", function (evento) {
    // console.log(evento.target.parentElement.parentElement)
    // console.log(evento.target.parentElement.parentElement.querySelector(".col-md-8"))
    if (evento.target.classList.contains("img-fluid")) {
        console.log("estoy guardando esta shit")

        // contenedorProducto.nombre = (evento.target.parentElement.querySelector("h1").textContent)
        // contenedorProducto.precio = (evento.target.parentElement.querySelector("h2").textContent)
        // contenedorProducto.popularidad = (evento.target.parentElement.querySelector("h3").textContent)
        // contenedorProducto.descripcion = (evento.target.parentElement.querySelector("p").textContent)
       

        informacionProducto.nombre = (evento.target.parentElement.parentElement.querySelector(".col-md-8").querySelector("h1").textContent)
        informacionProducto.precio = (evento.target.parentElement.parentElement.querySelector(".col-md-8").querySelector("h2").textContent)
        informacionProducto.popularidad = (evento.target.parentElement.parentElement.querySelector(".col-md-8").querySelector("h3").textContent)
        informacionProducto.descripcion = (evento.target.parentElement.parentElement.querySelector(".col-md-8").querySelector("p").textContent)
        informacionProducto.foto = (evento.target.parentElement.parentElement.querySelector(".col-md-4").querySelector("img").src)

        sessionStorage.setItem("producto", JSON.stringify(informacionProducto))

        console.log(informacionProducto)

        window.location.href = "./ampliarInfo.html"

    }
})