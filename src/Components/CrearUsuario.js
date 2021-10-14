import React from 'react';
import "../CSS/CrearUsuario.css";

// const ObtenerDatos = () =>{
//     let nombr=document.getElementById("Nombre").value;
//     let identi=document.getElementById("Identificacion").value;
//     let identi=document.getElementById("Nombre").value;
//     let identi=document.getElementById("Nombre").value;
    
// }
function CrearUsuario() {
    return (
        <div className="Formato">
            <ul className="Derecho">
                <h3>Gestión de usuarios</h3>
                <li>
                    <label for="Nombre">Nombre:</label>
                    <input type="text" id="Nombre" name="Nombre" />
                </li>
                <li>
                    <label for="Identificacion">Identificación:</label>
                    <input type="number" id="Identificacion" name="Identificacion" />
                </li>
                <li>
                    <label for="Estado"> Rol:</label>
                    <select name="select">
                        <option value="Vendedor" selected>Vendedor</option>
                        <option value="Administrador" >Administrador</option>
                        <option value="En espera">En espera</option>
                    </select>

                </li>
                <li>
                    <label for="Estado">Estado:</label>
                    <select name="select">
                        <option value="Pendiente" selected>Pendiente</option>
                        <option value="Autorizado" >Autorizado</option>
                        <option value="No autorizado">No utorizado</option>
                    </select>

                </li>
                <button>Guardar</button>
            </ul>
        </div>
    );
}

export default CrearUsuario;
