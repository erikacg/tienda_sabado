//el controlador importa modulos

import { pintartienda } from "./llenadoTienda.js";

//import{popup, desplazamientomenu} from "./otros.js";
import{ampliarImformacion} from "./ampliarImformacion.js"
//Se crea un producto vacio
let producto={}
//desplazamientomenu();
pintartienda();

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
  producto=ampliarImformacion(event)


})

let carrito=[]
//detectar añadir al carrito
let botonAdd =document.getElementById("botonAdd")

botonAdd.addEventListener("click", function(evento){

  //capturar porducto
  let cantidad=document.getElementById("cantidadProducto").value
producto.cantidad=cantidad

//agregar carrito al producto
carrito.push(producto)

//calcular la sumatorioa de productos
let suma=0
let capsula=document.getElementById("capsula")
carrito.forEach(function(producto){
  suma=suma+Number(producto.cantidad) 

})

capsula.textContent=suma

capsula.classList.remove("invisible")

})


let botonLess =document.getElementById("botonLess")
carrito=[]
botonLess.addEventListener("click", function(evento){

let capsula=document.getElementById("capsula")
capsula.classList.add("invisible")

})