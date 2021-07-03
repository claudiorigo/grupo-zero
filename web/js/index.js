const cargarUsuarios = async () =>{
    let res = await axios.get("http://localhost:8000/usuarios");
    let usuarios = res.data;
    let cuerpo = document.querySelector("#cuerpo-tabla");
    usuarios.forEach(u => {
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdEmail = document.createElement("td");
        tdNombre.innerText = u.username;
        tdEmail.innerText = u.email;
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        cuerpo.appendChild(tr);
    });
};

cargarUsuarios();