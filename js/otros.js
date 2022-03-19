
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



let boton=document.getElementById("botonA1")

boton.addEventListener("click",cambiarinformacion)
let info=document.getElementById("tituloAutor")
let imgautor=document.getElementById("fotoAutor")
let contenidoAutor=document.getElementById("contenidoautor")



function cambiarinformacion(){

  info.textContent="Isao Takahata"
  imgautor.src ="img/store/isao.jpg"
  contenidoAutor.textContent="Nacido en Japón, el 29 de octubre de 1935, fue director, productor y guionista de cintas de animación anime. Fue uno de los creadores más importantes del género. Cofundador, junto con su amigo Hayao Miyazaki de  \n los afamados Estudios Ghibli, su obra más afamada fue La tumba de las luciérnagas. <br> Takahata inició su carrera en los estudios de Toei Animation , donde dirigió su primera película, Horus, el príncipe del sol Taiyou no Ouji Horusu no Daibouken, 1968, en la que también participó Miyazaki."
}

let boton2=document.getElementById("botonB1")

boton2.addEventListener("click",cambiarinformacion2)

function cambiarinformacion2(){
  

    info.textContent='Hayao Miyazaki'
    imgautor.src ="img/store/hayao.jpg" 
    contenidoAutor.textContent="Nace en Tokio el 5 de enero de 1941. Su juventud la marcan la guerra y la imagen de una madre enferma que permanecerá en cama durante nueve años. Su padre y su tío dirigen una sociedad que fabrica timones para aviones. Desde joven supo que se dedicaría al negocio de su padre. Cursó estudios de ciencias económicas. \n Muestra rápidamente una gran pasión por la aviación y, más tarde, por el dibujo. En 1963, provisto de un título de economista, entra en la Toei Animation, el estudio más importante de Japón y el mayor de Asia. Allí conoció a Isao Takahata, con quien estableció una fructífera relación profesional que todavía dura. \n A continuación, seguirán veinte años de trabajo durante los cuales subirá todos los escalones dentro de la profesión (animador, guionista, realizador, productor) hasta acceder a la independencia total en 1985 con la creación de Studio Ghibli. \n En 1971, Miyazaki y Takahata abandonan Toei y se unen a A-Pro, una nueva productora. Más tarde, en 1973, ambos pasan a trabajar para Zuiyo Pictures, donde colaboran en series conocidas en Cuba como Alps no Shoujo Heidi (Heidi, 1974), Flanders no Inu (El Perro de Flandes, 1975) o Akage no Ann (Ana de las Tejas Verdes, 1979). "
  
  }

