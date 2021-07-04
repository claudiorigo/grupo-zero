// MODULO CARDS - START

const cargarCategoria = async function(){
    let res = await axios.get("../../static/core/api/categoria.json");    
    let cards = res.data.arrayCards;

    //const fecha = document.querySelector("#fecha");
    const contenedor = document.querySelector("#contenedor");
    const molde = document.querySelector(".molde-card"); 

    cards.forEach(p=>{
        //console.log(p.imagen);
        let copia = molde.cloneNode(true);
        copia.querySelector(".imagen-card").src = p.imagen;
        copia.querySelector(".categoria-card").innerText = p.categoria;        
        copia.querySelector(".descripcion-card").innerText = p.descripcion
        //copia.querySelector("#fecha").src = p.imagen;
        copia.querySelector(".link-card").addEventListener("click", function(){
            location.href = p.link;            
        });
        contenedor.appendChild(copia);
    });    
};
document.addEventListener("DOMContentLoaded", ()=>{
    cargarCategoria();
});
// MODULO CARDS - END