import React from 'react';
import "../CSS/Menu.css";
import Usuarios from './Usuarios';
import ReactDOM from 'react-dom';
import InfoVentas from './InfoVentas';
import Productos from './Productos';
import CrearProducto from "./CrearProducto";
import RegistroVenta from './RegistroVenta';

const ListarVentas = () => {
    ReactDOM.render(
        <InfoVentas />,
        document.getElementById('Espacio')
    );
}
const RegistrarProducto =() =>{
    ReactDOM.render(
        <CrearProducto />,
        document.getElementById('Espacio')
    );
}
const ListarProducto = () =>{
    ReactDOM.render(
        <Productos />,
        document.getElementById('Espacio')
    );
}
const ListarUsuarios = () =>{
    ReactDOM.render(
        <Usuarios />,
        document.getElementById('Espacio')
    );
}
const CrearVenta = () =>{
    ReactDOM.render(
        <RegistroVenta />,
        document.getElementById('Espacio')
    );
}
function Menu() {

    return (
        <div className="contenedor">
            <div className="Menu">
                <ul className="Izquierdo">
                    <a><li onClick={ListarVentas}>Información de ventas</li></a>
                    <a onClick={CrearVenta}><li>Registrar venta</li></a>
                    <a onClick={RegistrarProducto} ><li>Registrar un producto</li></a>
                    <a onClick={ListarProducto} ><li>Listar producto</li></a>
                    <a onClick={ListarUsuarios} ><li>Ver usuarios</li></a>


                </ul>

            </div>
            <div id="Espacio">
            </div>

        </div>
    );
}

export default Menu;
