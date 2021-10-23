import axios from 'axios';
import React, { Component } from 'react'
import "../CSS/Productos.css";
import GestionarProducto from './GestionarProducto';
import ReactDOM from 'react-dom';

export default class Productos extends Component {
    state = {
        productos: []
    }
    async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:4000/api/productos/listar');
            this.setState({
                productos: res.data.productos
            })
        } catch (error) {
            alert("Error al cargar los productos");
        }
    }
    gestionarProducto=(prod)=>{
        ReactDOM.render(
            GestionarProducto(prod),
            document.getElementById('Espacio'),
          );
    }
    render() {
        return (
            <div className="Info">
                <h3>Lista de productos</h3>
                <input type="search" name="buscar" id="" placeholder="Ingrese código o estado del producto" />
                <input type="submit" value="Buscar" className="boton" />

                <div className="tabla">

                    <table width={400} border={2} align={"left"}>
                        <thead>
                            <tr>
                                <th>Identificador</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Valor unitario</th>
                                <th>Estado</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        {this.state.productos.map((elemento) => {
                            return (
                                <tr key={elemento._id} >
                                    <td>
                                        {elemento._id}
                                    </td>
                                    <td>
                                        {elemento.Nombre}
                                    </td>
                                    <td>
                                        {elemento.Descripcion}
                                    </td>
                                    <td>
                                        {elemento.Precio}
                                    </td>
                                    <td>
                                        {elemento.Estado}
                                    </td>
                                    <td>
                                        <button onClick={()=>this.gestionarProducto(elemento)} >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>


            </div>
        )
    }
}

