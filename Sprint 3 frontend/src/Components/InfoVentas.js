import React from 'react';
import "../CSS/InfoVentas.css";

// const CrearBoton =() =>{
//   document.getElementById("linea").setAttribute()="<td>Gestionar</td>";
// }
function InfoVentas() {
  const lista = [{
/*     Identificador: 123,
    Descripcion: "kamkscakmsckmacma",
    Valor: 200,
    Estado: "Cancelado", */
  }, {
    Identificador: 123456879,
    Descripcion: "LASCNSCHANSCAKSCAMS",
    Valor: 5000,
    Estado: "En espera",

  }];
  return (
    <div className="Info">
      <h3>Información de ventas</h3>
      <input type="search" name="buscar" id="" placeholder="Ingrese ID, doc identidad o nombre" />
      <input type="submit" value="Buscar" />

      <table className="tabla" border={2}>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Descripción</th>
            <th>Valor unitario</th>
            <th>Estado</th>
          </tr>
        </thead>
        {lista.map((elemento, i) => {
          return (
            <tr key={i}  >
              <td>
                {elemento.Identificador}
              </td>
              <td>
                {elemento.Descripcion}
              </td>
              <td>
                {elemento.Valor}
              </td>
              <td >
                {elemento.Estado}
              </td>
              {/* <td id="linea"></td> */}
            </tr>
          )
        })}

      </table>


    </div>
  );
}

export default InfoVentas;
