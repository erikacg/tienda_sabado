//arreglo de objetos
export function pintartienda(){
  let productos=[
    {nombre:"Pin Haku -Viaje de chihiro",
    precio:27000,
     photo:"img/p-img1.jpg",
     descripcion:"Pin kawaii",
     segundaDescripcion:"Pin kawaii ¡Agregue una dosis de kawaii a su vida cotidiana con estos llaveros súper lindos de Studio Ghibli! Estas baratijas son perfectas para mostrar tu amor por tus personajes favoritos de Ghibli."
    },

    {nombre:"Ecobolsa mi vecino Totoro",
    precio:53000,
    photo:"img/p-img2.jpg",
    descripcion:"lindo y ecologico",
    segundaDescripcion:"lindo y ecologico Bolsa de algodón de tela ligera de 5 onzas bolsa reutilizable de tela para compras de comestibles, diseños creativos"
    },

    {nombre:"Campanilla de viento Totoro",
    precio:81000,
    photo:"img/p-img3.jpg",
    descripcion:"Tamaño: 18cm",
    segundaDescripcion:"Tamaño: 18cm ¡Excelente para usar como campanilla de viento, colgador de puerta, decoración de ventana, colgador de espejo retrovisor en su automóvil, o incluso excelente como adorno para el árbol de Navidad! \n\nMaterial: Resina"
    },

    {nombre:"Posters películas 8' x 10'",
    precio:25000, 
    photo:"img/p-img4.jpg",
    descripcion:"Material: propalcote",
    segundaDescripcion:"Material: propalcote Tamaño:  42x30 cm (16x12 pulgadas)"
  },

    {nombre:"Camiseta Haku Viaje de chihiro",
    precio:96000, 
    photo:"img/p-img5.jpg",
    descripcion:" 5.3 onzas",
    segundaDescripcion:"5.3 onzas, 100 % algodón (99/1 algodón/poliéster (ceniza) y 90/10 algodón/poliéster (gris deportivo) \n\nCamiseta clásica unisex de peso pesado \nCuello y hombros sellados; etiqueta desprendible \nTipo de decoración: Impresión digital "
    },

    {nombre:"Camiseta Viaje de chihiro",
    precio:91000, 
    photo:"img/p-img6.jpg",
    descripcion:"100 % algodón ",
    segundaDescripcion:"100 % algodón (99/1 algodón/poliéster (ceniza) y 90/10 algodón/poliéster (gris deportivo) \n\nCamiseta clásica unisex de peso pesado \nCuello y hombros sellados; etiqueta desprendible \nTipo de decoración: Impresión digital "
    },

    {nombre:"Colgante Kaonashi- sin cara ",
    precio:40000, 
    photo:"img/p-img7.jpg",
    descripcion:"Tamaño: 18 cm",
    SegundaDescripcion:"Tamaño: 18 cm, 15 cm Material: Resina \n\n\nAdvertencia: Mantener alejado del fuego"
    },
    
    {nombre:"Kaonashi varios -sin cara",
    precio:33000, 
    photo:"img/p-img8.jpg",
    descripcion:"Familia kaonashi...",
    segundaDescripcion:"Familia kaonashi... Escala: 1/60 \n\n\nMaterial: PVC \n\n\nTamaño: 3-6cm"
    },

    {nombre:"Portalapices mi vecino Totoro",
    precio:45000, 
    photo:"img/p-img9.jpg",
    descripcion:"kawaii",
    segundaDescripcion:"para adultos independientes soy un adulto independiente con gustos bien demenstes.... oyoyo de adulto independiente"
    },

    {nombre:"Lampara Kaonashi - sin cara",
    precio:190000, 
    photo:"img/p-img10.jpg",
    descripcion:"Figuras Led",
    segundaDescripcion:"Figuras Juguete Luz LED Material: Resina \n\n\nTamaño: 12 cm, 10 cm \n\n\nDimensiones: 10 cm \nAdvertencia: Mantener alejado del fuego"
    }
]

//creo la referencia al componente padre
//creo un variable para almacenar la base



let fila=document.getElementById('fila')
let fila2=document.getElementById('fila2')

//recorrer array js
productos.forEach(function(producto){

    //paso para pintar en js
    //1 cree la estructura
    let columna=document.createElement("div")
    columna.classList.add("col")
    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card" ,"border-info","h-100")

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

    //crear descripcion
    let description=document.createElement("p")
    description.classList.add("card-text")
    description.textContent=producto.descripcion

    //segunda descripcion
    let segundaDescripcion=document.createElement("p")
    segundaDescripcion.classList.add("card-text")
    segundaDescripcion.hidden=true
    segundaDescripcion.id="segundaD"
    segundaDescripcion.textContent=producto.segundaDescripcion


    // precio
    let precioProducto =document.createElement("p")
    precioProducto.classList.add("stprecios")
    precioProducto.textContent="$"+producto.precio
    //crear boton
    let buttonMore=document.createElement("button")
    buttonMore.classList.add("btn","btn-info")
    buttonMore.innerText='Leer más'

    //2 ordenar estructura
    content1.appendChild(title)
    content1.appendChild(description)
    content1.appendChild(segundaDescripcion)
    content1.appendChild(precioProducto)
    content1.appendChild(buttonMore)
    tarjeta.appendChild(image)
    tarjeta.appendChild(content1)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


   

})




}



  //buttonViewProduct.click();

//empezar evento
/*
let boton=document.getElementById("boton1")

//detectarevento 
boton.addEventListener("click",cambiarfoto)

function cambiarfoto(){
  let foto=document.getElementById("fotoprueba")
  foto.src="img/p-img4.jpg"
}*/
