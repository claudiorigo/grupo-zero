// MODULO FORM CONTACTO - START
/*
const mensajes = []; //Definir arreglo
const mostrarMensaje = ()=>{
    let tbody = document.querySelector("#tbody-mensaje");    
    tbody.innerHTML = "";     
    for(let i=0; i < mensajes.length; ++ i){
        let m = mensajes[i];        
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdCorreo = document.createElement("td");
        let tdAsunto = document.createElement("td");
        let tdMensaje = document.createElement("td");
        tdNombre.innerText = m.nombre;
        tdCorreo.innerText = m.correo;
        tdAsunto.innerText = m.asunto;
        tdMensaje.innerText = m.mensaje;
        tr.appendChild(tdNombre);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdAsunto);
        tr.appendChild(tdMensaje);
        tbody.appendChild(tr);        
    }
};

//Validar que existe informacion en los imput
let valida = true;
nombre.onfocus = function () {        
    document.querySelector("#nombre").classList.remove("is-invalid")   
};
correo.onfocus = function () {        
    document.querySelector("#correo").classList.remove("is-invalid")
};
asunto.onfocus = function () {        
    document.querySelector("#asunto").classList.remove("is-invalid")
};
mensaje.onfocus = function () {        
    document.querySelector("#mensaje").classList.remove("is-invalid")
};
if(valida){
    nombre.onblur = function () {
        if(document.querySelector("#nombre").value !== ""){
            document.querySelector("#nombre").classList.add("is-valid")
        }else{
            document.querySelector("#nombre").classList.remove("is-valid")
        }   
    };
    correo.onblur = function () {
        if(document.querySelector("#correo").value !== ""){
            document.querySelector("#correo").classList.add("is-valid")        
        }else{
            document.querySelector("#correo").classList.remove("is-valid")
        }   
    };
    asunto.onblur = function () {
        if(document.querySelector("#asunto").value !== ""){
            document.querySelector("#asunto").classList.add("is-valid")
        }else{
            document.querySelector("#asunto").classList.remove("is-valid")
        }   
    };
    mensaje.onblur = function () {
        if(document.querySelector("#mensaje").value !== ""){
            document.querySelector("#mensaje").classList.add("is-valid")
        }else{
            document.querySelector("#mensaje").classList.remove("is-valid")
        }   
    };
}
let limpiarForm = ()=>{
    document.querySelector("#nombre").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#asunto").value = "";
    document.querySelector("#mensaje").value = "";
    document.querySelector("#nombre").classList.remove("is-valid")
    document.querySelector("#correo").classList.remove("is-valid")
    document.querySelector("#asunto").classList.remove("is-valid")
    document.querySelector("#mensaje").classList.remove("is-valid")
}
document.querySelector("#formulario").addEventListener('submit', (e)=>{
    e.preventDefault(); //Prevenir que el formulario recargue la página
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;
    let esValido = true;

    document.querySelector("#nombre").classList.remove("is-invalid")
    document.querySelector("#correo").classList.remove("is-invalid")
    document.querySelector("#asunto").classList.remove("is-invalid")
    document.querySelector("#mensaje").classList.remove("is-invalid")
    

    if(nombre.trim() == ""){
        document.querySelector("#nombre").classList.add("is-invalid")
        esValido = false;
        valida = false;
    }
    if(correo.trim() == ""){
        document.querySelector("#correo").classList.add("is-invalid")
        esValido = false;
        valida = false;
    }    
    if(asunto.trim() == ""){
        document.querySelector("#asunto").classList.add("is-invalid")
        esValido = false;
        valida = false;
    }
    if(mensaje.trim() == ""){
        document.querySelector("#mensaje").classList.add("is-invalid")
        esValido = false;
        valida = false;
    }
    nombre.onfocus = function () {
        console.log("Clic input invalid");
    };
    if(esValido){
        
        let mensajeGrupoCero = {}; //Definir Objeto
        mensajeGrupoCero.nombre = nombre;
        mensajeGrupoCero.correo = correo;
        mensajeGrupoCero.asunto = asunto;
        mensajeGrupoCero.mensaje = mensaje;
        mensajes.push(mensajeGrupoCero);
        
        //mostrarMensaje();
        limpiarForm();
        Swal.fire("Correo enviado Correctamente.");
    }
});
// MODULO FORM CONTACTO - END

*/
