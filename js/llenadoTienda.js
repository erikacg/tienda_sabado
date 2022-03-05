//arreglo de objetos

let productos=[
    {nombre:"producto1",precio:40000, photo:"img/p-img1.jpg",descripcion:"asasdas"},
    {nombre:"producto2",precio:80000, photo:"img/p-img2.jpg",descripcion:"asasdas"},
    {nombre:"producto3",precio:20000, photo:"img/p-img3.jpg",descripcion:"asasdas"},
    {nombre:"producto5",precio:100000, photo:"img/p-img4.jpg",descripcion:"asasdas"},
    {nombre:"producto6",precio:74000, photo:"img/p-img5.jpg",descripcion:"asasdas"},
    {nombre:"producto7",precio:40000, photo:"img/p-img6.jpg",descripcion:"asasdas"},
    {nombre:"producto8",precio:40000, photo:"img/p-img7.jpg",descripcion:"asasdas"},
    {nombre:"producto9",precio:40000, photo:"img/p-img8.jpg",descripcion:"asasdas"},
    {nombre:"producto10",precio:40000, photo:"img/p-img9.jpg",descripcion:"asasdas"},
    {nombre:"producto4",precio:190000, photo:"img/p-img10.jpg",descripcion:"asasdas"}
]

//creo la referencia al componente padre
//creo un variable para almacenar la base

let fila=document.getElementById('fila')

//recorrer array js
productos.forEach(function(producto){
    console.log(producto.nombre)
    //paso para pintar en js
    //1 cree la estructura
    let columna=document.createElement("div")
    columna.classList.add("col")
    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    //crear img
    let image=document.createElement("img")
    image.classList.add("card-img-top")
    image.src=producto.photo

    //textos
    let content1=document.createElement("div") 
    content1.classList.add("card-body")

    //crear titulo
    let title=document.createElement("h5")
    title.classList.add("card-title")
    title.textContent=producto.nombre
    //2 ordenar estructura
    content1.appendChild(title)
    tarjeta.appendChild(image)
    tarjeta.appendChild(content1)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})

//empezar evento
/*
let boton=document.getElementById("boton1")

//detectarevento 
boton.addEventListener("click",cambiarfoto)

function cambiarfoto(){
  let foto=document.getElementById("fotoprueba")
  foto.src="img/p-img4.jpg"
}*/

