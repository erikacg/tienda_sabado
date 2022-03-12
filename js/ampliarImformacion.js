export function ampliarImformacion(event){
    let producto={}
if(event.target.classList.contains("btn")){
      let modalInfoproducto = new bootstrap.Modal(document.getElementById('modalinfo'))
  modalInfoproducto.show()
producto={
    photo:event.target.parentElement.parentElement.parentElement.querySelector("img").src,
    nombre:event.target.parentElement.parentElement.parentElement.querySelector("h5").textContent
}
console.log(producto)
let photo=document.getElementById("photoinfo")
photo.src=producto.photo
let nombre=document.getElementById("nombreinfo")
nombre.textContent=producto.nombre
}

}