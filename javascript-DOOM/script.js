
class Productos{
    constructor(id,nombre,precio,cantidad,marca){
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.cantidad=cantidad
        this.marca=marca
     }
}
const producto1= new Productos(1,"Goma de borrar",25,1,"Maped")
const producto2= new Productos(2,"Lapiceras de colores",100,4,"Faber Castell")
const producto3= new Productos(2,"Packs de hojas x480 c/u",8000,8,"Exito")

let utiles=[producto1,producto2,producto3]

let divUtiles=document.getElementById("divUtiles")

utiles.forEach(utilesEnArray => {
    divUtiles.innerHTML +=` 
    <div class="card" id="Productos${utilesEnArray.id}" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${utilesEnArray.nombre}</h5>
    <p class="card-text">$${utilesEnArray.precio}</p>
    <p class="card-text">${utilesEnArray.cantidad}</p>
    <p class="card-text">Marca:${utilesEnArray.marca}</p>
    <div class="row">
    <button id="botonEliminar${utilesEnArray.id} "class="btn btn-danger" >Borrar</button>
    <button id="botonAgregar${utilesEnArray.id} "class="btn btn-dark" >Agregar</button>
    </div>
    </div>
  </div>
    `    
})