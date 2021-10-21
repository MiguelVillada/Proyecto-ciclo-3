import axios from 'axios';
import React from 'react';
import "../CSS/CrearUsuario.css";

const registrar = async () => {
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
        await axios.post('http://localhost:4000/api/usuarios/crear', user);
        alert("Registro exitoso");
    } catch (error) {
        alert("Error al registrar usuario");
    }
}
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
                    <select >
                        <option name="Roles" defaultValue="Vendedor" selected >Vendedor</option>
                        <option name="Roles" defaultValue="Administrador" >Administrador</option>
                        <option name="Roles" defaultValue="En espera">En espera</option>
                    </select>

                </li>
                <li>
                    <label for="Estado">Estado:</label>
                    <select >
                        <option name="Estados" defaultValue="Pendiente" selected >Pendiente</option>
                        <option name="Estados" defaultValue="Autorizado" >Autorizado</option>
                        <option name="Estados" defaultValue="No autorizado">No autorizado</option>
                    </select>

                </li>
                <button onClick={registrar}>Guardar</button>
            </ul>
        </div>
    );
}

export default CrearUsuario;
