export function ampliarImformacion(event){
    let producto={}
if(event.target.classList.contains("btn")){
      let modalInfoproducto = new bootstrap.Modal(document.getElementById('modalinfo'))
  modalInfoproducto.show()
producto={
    photo:event.target.parentElement.parentElement.parentElement.querySelector("img").src,
    nombre:event.target.parentElement.parentElement.parentElement.querySelector("h5").textContent,
   descripcion:event.target.parentElement.parentElement.parentElement.querySelector("#segundaD").textContent,
   precioProducto:event.target.parentElement.querySelector(".stprecios").textContent
}
console.log(producto)
let photo=document.getElementById("photoinfo")
photo.src=producto.photo
let nombre=document.getElementById("nombreinfo")
nombre.textContent=producto.nombre
let descripcion=document.getElementById("textoinfo")
descripcion.textContent=producto.descripcion
let precioProducto=document.getElementById("precioinfo")
precioProducto.textContent=producto.precioProducto
}

}

///pathname