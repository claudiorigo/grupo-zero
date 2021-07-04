/******** AGREGAR NUEVO CARDS *************/

// MODULO COUDINARY UPLOAD IMAGE - START
'use strict';
const boton_foto = document.querySelector('#btn-imagen');
const imagen = document.querySelector('#image-upload');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'rigollet',
    uploadPreset: 'preset_pabs'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        //console.log('imagenes subida con exito', result.info);        
        imagen.src = result.info.secure_url;
        console.log(imagen.src);    
    }
});
boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);
// MODULO COUDINARY UPLOAD IMAGE - END

// MODULO CARDS API LOCAL - START
const cargarCategoria = async function(){
    let res = await axios.get("static/core/api/categoria.json");    
    let cards = res.data.arrayCards;

    const contenedor = document.querySelector("#contenedor");
    const molde = document.querySelector(".molde-card"); 

    cards.forEach(p=>{
        //console.log(p.imagen);
        let copia = molde.cloneNode(true);
        copia.querySelector(".imagen-card").src = p.imagen;
        copia.querySelector(".categoria-card").innerText = p.categoria;        
        copia.querySelector(".descripcion-card").innerText = p.descripcion
        copia.querySelector(".link-card").addEventListener("click", function(){
            location.href = p.link;            
        });
        contenedor.appendChild(copia);
    });    
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarCategoria();
});
// MODULO CARDS API LOCAL - END

// MODULO AGREGAR NUEVO CARDS EN UN ARREGLO Y MOSTRAR EN MOLDE - START
const cards = []; //Definir arreglo
const mostrarCard = ()=>{
    const contenedor_nuevo = document.querySelector("#contenedor-nuevo");
    const molde_nuevo = document.querySelector(".molde-card-nueva"); 
    contenedor_nuevo.innerHTML = "";     
    for(let i=0; i < cards.length; ++ i){
        let c = cards[i]; 
        let copia_nueva = molde_nuevo.cloneNode(true);        
        copia_nueva.querySelector(".categoria-card-nueva").innerText = c.categoria;        
        copia_nueva.querySelector(".descripcion-card-nueva").innerText = c.descripcion
        copia_nueva.querySelector(".imagen-card-nueva").src = c.image
        contenedor_nuevo.appendChild(copia_nueva);
    }
};

let valida = true;
categoria.onfocus = function () {        
    document.querySelector("#categoria").classList.remove("is-invalid")   
};
descripcion.onfocus = function () {        
    document.querySelector("#descripcion").classList.remove("is-invalid")
};

if(valida){
    categoria.onblur = function () {
        if(document.querySelector("#categoria").value !== ""){
            document.querySelector("#categoria").classList.add("is-valid")
        }else{
            document.querySelector("#categoria").classList.remove("is-valid")
        }   
    };
    descripcion.onblur = function () {
        if(document.querySelector("#descripcion").value !== ""){
            document.querySelector("#descripcion").classList.add("is-valid")        
        }else{
            document.querySelector("#descripcion").classList.remove("is-valid")
        }   
    };   
}

let limpiarForm = ()=>{
    document.querySelector("#categoria").value = "";
    document.querySelector("#descripcion").value = "";
    
    document.querySelector("#categoria").classList.remove("is-valid")
    document.querySelector("#descripcion").classList.remove("is-valid")
}

document.querySelector("#nueva").addEventListener('submit', (e)=>{

    e.preventDefault(); //Prevenir que el formulario recargue la página
    let categoria = document.querySelector("#categoria").value;
    let descripcion = document.querySelector("#descripcion").value;
    let image = imagen.src;  
    let esValido = true;

    document.querySelector("#categoria").classList.remove("is-invalid")
    document.querySelector("#descripcion").classList.remove("is-invalid")

    if(categoria.trim() == ""){
        document.querySelector("#categoria").classList.add("is-invalid")
        esValido = false;
        
    }
    if(descripcion.trim() == ""){
        document.querySelector("#descripcion").classList.add("is-invalid")
        esValido = false;        
    }
      
    if(esValido){
        let card = {}; //Definir Objeto
        card.categoria = categoria;
        card.descripcion = descripcion;
        card.image = image;        
        console.log(document.querySelector("#image-upload").src = "static/core/image/subir-imagen.jpg");
        cards.push(card);
        mostrarCard();
        limpiarForm();
        Swal.fire("Categoría agregada exitosamente.");
    }
});
// MODULO AGREGAR NUEVO CARDS EN UN ARREGLO Y MOSTRAR EN MOLDE - START