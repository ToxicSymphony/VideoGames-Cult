let productos = [
  {
    nombre: "Call Of Duty Vanguard",
    precio: 60,
    fotos: [
        "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/CallOfDuty.webp?alt=media&      token=91b65962-e0b6-412d-8056-f31c65e703b7","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/CallOfDuty2.webp?alt=media&token=924f4203-ba48-42e6-b4b9-6a530dade4e3"
    ],
    popularidad: 4,
    descripcion: "Rise on every front: Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper’s precision and blast through advancing forces in North Africa. The Call of Duty® franchise returns with Call of Duty®: Vanguard, developed by Sledgehammer Games, where players will be immersed in visceral WWII combat on an unprecedented global scale",
    categoria: "Shooter",
  },
  {
    nombre: "Far Cry 6",
    precio: 80,
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/FarCry6-2.webp.jpg?alt=media&token=639d557a-8d8b-4789-a570-37ad92c01455","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/FarCry6.webp?alt=media&token=d554e8b0-44d0-4552-a55c-9ed8a4849a74"
    ],
    popularidad: 3,
    descripcion: "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution",
    categoria: "Aventura",
  },
  {
    nombre: "Fifa23",
    precio: 70,
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Fifa231.webp?alt=media&token=ca686a56-12a3-4511-b7eb-e40d9712bb04","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Fifa232.webp?alt=media&token=547fa5fe-1044-4000-a04c-e78eee467ffa"
    ],
    popularidad: 1,
    descripcion: "FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game, with advances in HyperMotion2 Technology** on PlayStation®5 driven by twice as much real-world motion capture helping to create more true football animation than ever before in every match.",
    categoria: "sports"
  },
  {
    nombre: "God of War Ragnarok",
    precio: 60,
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/GOW%20ragnarok.webp?alt=media&token=dea85535-9df8-457f-97f8-ef0b6c360c46","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/GOw%20ragnarok2.webp?alt=media&token=6d04974b-7e57-4f73-ba3d-2f0f8b95efef"
    ],
    popularidad: 4,
    descripcion: "Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms.\nThroughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild beasts – as they prepare for the showdown of their lives",
    categoria: "Accion"
  },
  {
    nombre: "Hitman 3",
    precio: 60,
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Hitman31.png.jpg?alt=media&token=88a496cf-5f59-4f14-ad25-e7db1c3c4d36","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Hitman3.png?alt=media&token=c48699f8-5b23-48a9-8edd-4fd70b715a32"
    ],
    popularidad: 2,
    descripcion: "Death Awaits. Agent 47 returns in HITMAN 3, the dramatic conclusion to the World of Assassination trilogy..",
    categoria: "Accion"
  },
  {
    nombre: "MultiVersus",
    precio: "Free",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Multiversus.webp?alt=media&token=1b5f1e6e-6254-441b-b049-89f28fa2c641","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Multiversus2.webp.jpg?alt=media&token=ccc66870-6cd0-4dab-8a07-b91fe23669ea"
    ],
    popularidad: 4,
    descripcion: `Grab a MultiVersus Founders Pack for a batch of Character Tickets used for character unlocks, exclusive items, and more
    Save your Gold Gleamium, and use your Character Tickets to instantly unlock any available character of your choosing! With new characters continuously added to the game, feel free to hang onto your tickets to unlock your favorites down the line. With over 18,000 Gleamium worth of content, you wont want to miss out!`,
    categoria: "lucha"
  },
  {
    nombre: "Raimbow Six Siege",
    precio: 40,
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Raimbow%20Six2.jpg?alt=media&token=4048afab-6768-4529-94e7-c43ec73bd4fd","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Raimbow%20Six1.jpg?alt=media&token=0df240bf-8602-4b71-9101-b2dbc2474fe0"
    ],
    popularidad: 1,
    descripcion: "Dive into explosive 5v5 gameplay, high-stakes competition, and thrilling PvP team battles. Tom Clancy's Rainbow Six® Siege features an ever-expanding experience with limitless opportunities to perfect your strategy and help lead your team to victory.. ",
    categoria: "Shooter"
  },
  {
    nombre: "The Last Of uS",
    precio: 50,
    fotos: ["https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/TheLastOfUs.webp?alt=media&token=addc0a97-f378-40a4-a6ab-3675d2d1aee8","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/TheLastOfUs-2.webp.jpg?alt=media&token=d56124b1-3373-4d4d-8279-300c45357868"],
    popularidad: 5,
    descripcion: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.",
    categoria: "Accion"
  },
  {
    nombre: "Assasins Creed Valhalla",
    precio: 60,
    fotos: ["https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Valhalla.webp?alt=media&token=5bde4d97-bee6-4a0b-b8d7-8d4577965fba","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/Valhalla2.webp?alt=media&token=00a57739-c190-4acb-a7d4-84c5846bde06",],
    popularidad: 4,
    descripcion: "In Assassin’s Creed® Valhalla, you are Eivor, a fierce Viking warrior raised on tales of battle and glory. Explore a mysterious and beautiful open world set against the brutal backdrop of England’s Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla..",
    categoria: "Accion"
  },
  {
    nombre: "BattleField",
    precio: 70,
    fotos: ["https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/battlefield2.jpg?alt=media&token=3a2e07c8-11e9-4bf7-b4ff-41cd0c947f49","https://firebasestorage.googleapis.com/v0/b/armasborderlandsjpbs.appspot.com/o/battlefield1.jpg?alt=media&token=e98fb33e-32af-4db6-82a0-844283b89373"],
    popularidad: 3,
    descripcion: `
    Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.`,
    categoria: "Shooter"
  },
];

let container = document.getElementById("container");



productos.forEach(function (producto) {
  let fila2 = document.createElement("div");
  fila2.classList.add("row", "row-cols-1", "row-cols-mb-3", "g-row-5");

  let tarjeta = document.createElement("div");
  tarjeta.classList.add(
    "card",
    "mb-3",
    "shadow",
    "text-center",
    "fs-5",
    "h-100",
    "m-5",
    "bg-dark",
    "border-danger"
  );

  let contenedor = document.createElement("div")
  contenedor.classList.add("row","g-0", "p-3")

  let columnaImagen = document.createElement("div")
  columnaImagen.classList.add("col-md-4")

  let columnaTexto = document.createElement("div")
  columnaTexto.classList.add("col-md-8", "text-start", "p-3" )

  let imagen = document.createElement("img");
  imagen.classList.add("img-fluid", "w-100");
  imagen.src = producto.fotos[0];

  imagen.addEventListener("mouseover", function () {
    imagen.src = producto.fotos[1];
  });

  imagen.addEventListener("mouseleave", function () {
    imagen.src = producto.fotos[0];
  });

  imagen.addEventListener("click", function () {
    imagen.src = producto.fotos[0];
  });

  // let nombre = document.createElement("h1");
  // nombre.classList.add("text-light", "fw-bold");
  // nombre.textContent = producto.nombre;

  let nombre = document.createElement("h1")
  nombre.classList.add("text-light", "fw-bold")
  nombre.textContent=producto.nombre

  let precio = document.createElement("h2");
  precio.classList.add("text-light");
  precio.textContent = `$${producto.precio}`



  let numeroPopularidad = document.createElement("h3");
  numeroPopularidad.textContent = producto.popularidad;
  numeroPopularidad.classList.add("d-none");

  let contenedorEstrellas = document.createElement("div");
  // contenedorEstrellas.classList.add("container-fluid", "g-3")
  for (let i = 1; i <= producto.popularidad; i++) {
    let estrellas = document.createElement("i");
    estrellas.classList.add("bi", "bi-star-fill", "text-warning");
    contenedorEstrellas.appendChild(estrellas);
  }

  let descripcion = document.createElement("p")
  descripcion.classList.add("text-light","d-none")
  descripcion.textContent=producto.descripcion

  if (JSON.parse(sessionStorage.getItem("carrito")) != null) {

    carrito=JSON.parse(sessionStorage.getItem("carrito"))

    let pildora = document.getElementById("pildora");
    pildora.textContent=carrito.length
    
} else {
    carrito=[]
}

if (producto.nombre == "MultiVersus") {
  precio.textContent = producto.precio
  
}


 
  tarjeta.appendChild(contenedor)
  contenedor.appendChild(columnaImagen)
  contenedor.appendChild(columnaTexto)
  columnaImagen.appendChild(imagen)
  columnaTexto.appendChild(nombre)
  columnaTexto.appendChild(precio)
  columnaTexto.appendChild(numeroPopularidad)
  columnaTexto.appendChild(contenedorEstrellas)
  columnaTexto.appendChild(descripcion)
  fila2.appendChild(tarjeta)
  container.appendChild(fila2)
  
  


});

