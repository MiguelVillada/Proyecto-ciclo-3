import React from 'react';
import ReactDOM from 'react-dom';
import "../CSS/Usuarios.css";
import CrearUsuario from './CrearUsuario';

const RegistrarNuevo = () =>{
    ReactDOM.render(
        <CrearUsuario />,
        document.getElementById('Espacio')
    );
}

function Usuarios() {
    const ListaUsuarios = [
        {
            Identificacion:1300004568,
            Nombre :"Carlos Villa",
            Estado:"Pendiente"
        },
    ]
    return (
        <div className="Info">
            <h3>Lista de usuarios</h3>
            <input type="search" name="buscar" id="" placeholder="Ingrese código o nombre del usuario" />
            <input type="submit" value="Buscar" className="boton" />
            <input type="button" value="Registrar usuario" onClick={RegistrarNuevo}/>

            <div className="tabla">

                <table width={400} border={2} align={"left"}>
                    <thead>
                        <tr>
                            <th>Identificación</th>

                            <th>Nombre</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    {ListaUsuarios.map((elemento, i) => {
                        return (
                            <tr key={i} >
                                <td>
                                    {elemento.Identificacion}
                                </td>
                                <td>
                                    {elemento.Nombre}
                                </td>
                                <td>
                                    {elemento.Estado}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default Usuarios;
