import React from 'react';
import "../CSS/InfoVentas.css";
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import RegistroVenta from './RegistroVenta';

export default class InfoVentas extends Component {

  state = {
    ventas: []
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/ventas/listar");
    this.setState({
      ventas: res.data.venta,
    })
  }
  gestionarVenta =  (iden) => {

    ReactDOM.render(
      RegistroVenta(iden),
      document.getElementById('Espacio'),
    );
  }
  mostrarVenta = () => async (iden) => {
    const ven = await axios.get("http://localhost:4000/api/ventas/listar/" + iden);
  
  }
  render() {
    return (
      <div className="Info">
        <h3>Información de ventas</h3>
        <form onSubmit={()=>this.mostrarVenta}>
          <input type="search" name="buscar" id="Busqueda" placeholder="Ingrese ID, doc identidad o nombre" />
          <input type="submit" value="Buscar" />
        </form>
        <table className="tabla" border={2}>
          <thead>
            <tr>
              <th>IdVenta</th>
              <th>IdProducto</th>
              <th>Valor unitario</th>
              <th>Cantidad</th>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Fecha</th>
              <th>Editar</th>
            </tr>
          </thead>
          {this.state.ventas.map((elemento) => {
            return (
              <tr key={elemento._id} >
                <td >
                  {elemento._id}
                </td>
                <td>
                  {elemento.Id_Producto}
                </td>
                <td>
                  {elemento.Valor}
                </td>
                <td >
                  {elemento.Cantidad}
                </td>
                <td >
                  {elemento.Cliente}
                </td>
                <td >
                  {elemento.Vendedor}
                </td>
                <td >
                  {elemento.Fecha}
                </td>
                <td>
                  <button onDoubleClick={() => this.gestionarVenta(elemento)}>Editar</button>
                </td>
              </tr>
            )
          })}

        </table>


      </div>
    );
  }
}

