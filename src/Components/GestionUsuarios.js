import axios from 'axios';
import React from 'react';
import "../CSS/CrearUsuario.css";

const actualizar = async (iden) => {
    let rol = "";
    let est = "";
    for (let i = 0; i < document.getElementsByName('Roles').length; i++) {
        if (document.getElementsByName('Roles')[i].selected) {
            rol = document.getElementsByName('Roles')[i].value;
        }
    }
    for (let i = 0; i < document.getElementsByName('Estados').length; i++) {
        if (document.getElementsByName('Estados')[i].selected) {
            est = document.getElementsByName('Estados')[i].value;
        }
    }
    const user = {
        Nombre: document.getElementById('Nombre').value,
        Identificacion: document.getElementById('Identificacion').value,
        Rol: rol,
        Estado: est
    }
    console.log(user);
    try {
        await axios.put('http://localhost:4000/api/usuarios/'+iden, user);
        alert("Actualizado");
    } catch (error) {
        alert("Error al actualizar usuario");
    }
}
function GestionUsuarios(usuario) {
    return (
        <div className="Formato">
            <ul className="Derecho">
                <h3>Gestión de usuarios</h3>
                <li>
                    <label for="Nombre">Nombre:</label>
                    <input type="text" id="Nombre" name="Nombre"
                        defaultValue={usuario.Nombre} />
                </li>
                <li>
                    <label for="Identificacion">Identificación:</label>
                    <input type="number" id="Identificacion" name="Identificacion"
                        defaultValue={usuario.Identificacion} />
                </li>
                <li>
                    <label for="Estado"> Rol:</label>
                    <select >
                        <option name="Roles" defaultValue="Vendedor"
                            selected={(usuario.Rol === "Vendedor")} >
                            Vendedor
                        </option>
                        <option name="Roles" defaultValue="Administrador"
                            selected={(usuario.Rol === "Administrador")}>
                            Administrador
                        </option>
                        <option name="Roles" defaultValue="En espera"
                            selected={(usuario.Rol === "En espera")}>
                            En espera
                        </option>
                    </select>

                </li>
                <li>
                    <label for="Estado">Estado:</label>
                    <select >
                        <option name="Estados" defaultValue="Pendiente"
                            selected={(usuario.Estado === "Pendiente")}>
                            Pendiente
                        </option>
                        <option name="Estados" defaultValue="Autorizado"
                            selected={(usuario.Estado === "Autorizado")}>
                            Autorizado
                        </option>
                        <option name="Estados" defaultValue="No autorizado"
                            selected={(usuario.Estado === "No autorizado")}>
                            No autorizado
                        </option>
                    </select>

                </li>
                <button onClick={()=>actualizar(usuario._id)}>Actualizar</button>
            </ul>
        </div>
    );
}

export default GestionUsuarios;
