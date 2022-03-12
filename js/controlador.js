//el controlador importa modulos

import { pintartienda } from "./llenadoTienda.js";

import{popup, desplazamientomenu} from "./otros.js";
import{ampliarImformacion} from "./ampliarImformacion.js"

desplazamientomenu();
pintartienda();

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
  ampliarImformacion(event)


})

