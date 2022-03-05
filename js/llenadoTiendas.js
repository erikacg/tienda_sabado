//arreglo de objetos

let prodcutos=[
    {nombre:"producto1",precio:40000, photo:"../img/p-img1.jpg",descripcion:"asasdas"},
    {nombre:"producto2",precio:80000, photo:"../img/p-img2.jpg",descripcion:"asasdas"},
    {nombre:"producto3",precio:20000, photo:"../img/p-img3.jpg",descripcion:"asasdas"},
    {nombre:"producto5",precio:100000, photo:"img/p-img4.jpg",descripcion:"asasdas"},
    {nombre:"producto6",precio:74000, photo:"img/p-img5.jpg",descripcion:"asasdas"},
    {nombre:"producto7",precio:40000, photo:"img/p-img6.jpg",descripcion:"asasdas"},
    {nombre:"producto8",precio:40000, photo:"img/p-img7.jpg",descripcion:"asasdas"},
    {nombre:"producto9",precio:40000, photo:"img/p-img8.jpg",descripcion:"asasdas"},
    {nombre:"producto10",precio:40000, photo:"img/p-img9.jpg",descripcion:"asasdas"},
    {nombre:"producto4",precio:190000, photo:"img/p-img10.jpg",descripcion:"asasdas"}
]
//recorrer array js
prodcutos.forEach(function(producto){
    console.log("jajajajaja")
})

//empezar evento

let boton=document.getElementById("boton1")

//detectarevento 
boton.addEventListener("click",cambiarfoto)

function cambiarfoto(){
  let foto=document.getElementById("fotoprueba")
  foto.src="img/p-img4.jpg"
}