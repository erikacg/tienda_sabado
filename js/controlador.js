//Comentario de linea
/*Variable
    multilinea
*/
/*
//Variable
let nombreUsuario = 'Erika';
let estaturaUsuario = 1.344;
let edadUsuario = 20;
let telefonoUsuario = "31231231";
let esPaisa = true;

//Constante
const APELLIDOS_USUARIO = "Castillo";


//Salida
console.log(`Buenas tardes ${nombreUsuario} su edad es ${edadUsuario} y la suma es ${1 + 1}`);

//Utilizando el DOM
document.addEventListener('DOMContentLoaded',() =>{
    let etiquetaTitulo = document.querySelector('#titulo');
    etiquetaTitulo.textContent = 'Isao_Takahata';
    etiquetaTitulo.classList.add('text-danger','text-center');


    let etiquetaNombreTienda = document.querySelector('#nombretienda');
    etiquetaNombreTienda.textContent = 'One Piece';

    let imagenEditada = document.querySelector('#fotoeditada');
    imagenEditada.src = 'public/img/ginbe.png';




});*/
////////////////////////////////Scroll///////////////////////////////////////////////
const sections =document.querySelectorAll('section');
const navLi= document.querySelectorAll('nav .navbar-collapse ul li');

window.addEventListener('scroll',()=>{
  let current= '';
  sections.forEach(section=>{
    const sectionTop= section.offsetTop;
    let  sectionHeight=section.clientHeight;
    if (sectionHeight >= sectionTop) {
      current=section.getAttribute('id');
      
    }
  })
  navLi.forEach(li=>{
    li.classList.contains('active');
    if (li.classList.contains(current)) {
      li.classList.add(áctive)
    }
  })
})

///////////////////////////////////quienes somos///////////////////////////////////////////

//empezar evento

let boton=document.getElementById("botonA1")
let boton2=document.getElementById("botonB1")

//detectarevento 
boton.addEventListener("click",cambiarinformacion)
boton2.addEventListener("click",cambiarinformacion2)

//cambio contenido
function cambiarinformacion(){
  let info=document.getElementById("tituloautor1");
  info.textContent='Isao Takahata';

  let imgautor=document.getElementById("fotoIsao");
  imgautor.src ='img/store/isao.jpg';

  let contenidoAutor=document.getElementById("contenidoautor");
  contenidoAutor.textContent='Nacido en Japón, el 29 de octubre de 1935, fue director, productor y guionista de cintas de animación anime. Fue uno de los creadores más importantes del género. Cofundador, junto con su amigo Hayao Miyazaki de los afamados Estudios Ghibli, su obra más afamada fue La tumba de las luciérnagas. \n Takahata inició su carrera en los estudios de Toei Animation , donde dirigió su primera película, Horus, el príncipe del sol Taiyou no Ouji Horusu no Daibouken, 1968, en la que también participó Miyazaki.';


}

function cambiarinformacion2(){
    let info=document.getElementById("tituloautor1");
    info.textContent='Hayao Miyazaki';

    let imgautor=document.getElementById("fotoIsao");
    imgautor.src ='img/store/hayao.jpg';
  
    let contenidoAutor=document.getElementById("contenidoautor");
    contenidoAutor.textContent='Nace en Tokio el 5 de enero de 1941. Su juventud la marcan la guerra y la imagen de una madre enferma que permanecerá en cama durante nueve años. Su padre y su tío dirigen una sociedad que fabrica timones para aviones. Desde joven supo que se dedicaría al negocio de su padre. Cursó estudios de ciencias económicas. \n Muestra rápidamente una gran pasión por la aviación y, más tarde, por el dibujo. En 1963, provisto de un título de economista, entra en la Toei Animation, el estudio más importante de Japón y el mayor de Asia. Allí conoció a Isao Takahata, con quien estableció una fructífera relación profesional que todavía dura. \n A continuación, seguirán veinte años de trabajo durante los cuales subirá todos los escalones dentro de la profesión (animador, guionista, realizador, productor) hasta acceder a la independencia total en 1985 con la creación de Studio Ghibli. \n En 1971, Miyazaki y Takahata abandonan Toei y se unen a A-Pro, una nueva productora. Más tarde, en 1973, ambos pasan a trabajar para Zuiyo Pictures, donde colaboran en series conocidas en Cuba como Alps no Shoujo Heidi (Heidi, 1974), Flanders no Inu (El Perro de Flandes, 1975) o Akage no Ann (Ana de las Tejas Verdes, 1979). ';
  
  }

