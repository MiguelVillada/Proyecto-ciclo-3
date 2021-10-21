import React from 'react';
import "../CSS/Menu.css";
import Usuarios from './Usuarios';
import ReactDOM from 'react-dom';
import InfoVentas from './InfoVentas';
import Productos from './Productos';
import CrearProducto from "./CrearProducto";
import RegistroVenta from './RegistroVenta';
import { Link } from 'react-router-dom';
import RegistroNuevaVenta from './RegistroNuevaVenta';

const ListarVentas = () => {
    ReactDOM.render(
        <InfoVentas />
        ,
        document.getElementById('Espacio')
    );
}
const RegistrarProducto = () => {
    ReactDOM.render(
        <CrearProducto />,
        document.getElementById('Espacio')
    );
}
const ListarProducto = () => {
    ReactDOM.render(
        <Productos />,
        document.getElementById('Espacio')
    );
}
const ListarUsuarios = () => {
    ReactDOM.render(
        <Usuarios />,
        document.getElementById('Espacio')
    );
}
const CrearVenta = () => {
    ReactDOM.render(
        <RegistroNuevaVenta />,
        document.getElementById('Espacio')
    );
}
function Menu() {

    return (
        <div className="contenedor">
            <div className="Menu">
                <ul className="Izquierdo">
                    <Link to="/ventas/listar">
                        <li onClick={ListarVentas}>Información de ventas</li>
                    </Link>
                    <Link to="/ventas/crear">
                        <li  onClick={CrearVenta}>Registrar venta</li>
                    </Link>
                    <Link to="/productos/registrar">
                        <li onClick={RegistrarProducto}>Registrar un producto</li>
                    </Link>
                    <Link to="/productos/listar">
                        <li onClick={ListarProducto}>Listar producto</li>
                    </Link>
                    <Link to="/usuarios/listar">
                        <li  onClick={ListarUsuarios}>Ver usuarios</li>
                    </Link>

                </ul>

            </div>
            <div id="Espacio">
            </div>

        </div>
    );
}

export default Menu;
