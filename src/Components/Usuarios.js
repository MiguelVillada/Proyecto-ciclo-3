import ReactDOM from 'react-dom';
import "../CSS/Usuarios.css";
import CrearUsuario from './CrearUsuario';
import React, { Component } from 'react';
import axios from 'axios';
import GestionUsuarios from './GestionUsuarios';

export default class Usuarios extends Component {
    state = {
        usuarios: []
    }
    getUsuarios = async () => {
        const res = await axios.get('http://localhost:4000/api/usuarios/listar');
        this.setState({
            usuarios: res.data.usuario
        })
    }
    editarUsuario = (usuario) => {
        ReactDOM.render(
            GestionUsuarios(usuario),
            document.getElementById('Espacio'),
        );
    }
    async componentDidMount() {
        this.getUsuarios();
    }
    registrarNuevo = () => {
        ReactDOM.render(
            <CrearUsuario />,
            document.getElementById('Espacio')
        );
    }
    eliminarUsuario = async (usuario) => {
        try {
            await axios.delete("http://localhost:4000/api/usuarios/" + usuario);
            this.getUsuarios();
        } catch (error) {
            alert("Error al eliminar usuario");
        }

    }
    render() {
        return (
            <div className="Info">
                <h3>Lista de usuarios</h3>
                <input type="search" name="buscar" id="" placeholder="Ingrese código o nombre del usuario" />
                <input type="submit" value="Buscar" className="boton" />
                <input type="button" value="Registrar usuario" onClick={() => this.registrarNuevo()} />

                <div className="tabla">

                    <table width={400} border={2} align={"left"}>
                        <thead>
                            <tr>
                                <th>Identificación</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Gestionar</th>
                            </tr>
                        </thead>
                        {this.state.usuarios.map((elemento) => {
                            return (
                                <tr key={elemento._id} >
                                    <td>
                                        {elemento.Identificacion}
                                    </td>
                                    <td>
                                        {elemento.Nombre}
                                    </td>
                                    <td>
                                        {elemento.Rol}
                                    </td>
                                    <td>
                                        {elemento.Estado}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => this.editarUsuario(elemento)}>
                                            Edit</button>
                                        <button
                                            onDoubleClick={
                                                () => this.eliminarUsuario(elemento._id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        );
    }
}





