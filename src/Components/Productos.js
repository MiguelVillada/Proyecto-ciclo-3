import React from 'react';
import "../CSS/Productos.css";
function Productos() {
    let ListarProductos = [{
        Identificador: 123,
        Descripcion: "qwerertoyoup",
        Valor: 200,
        Disponibilidad: "Disponible"
    },{
        Identificador: 123,
        Descripcion: "qwerertoyoup",
        Valor: 200,
        Disponibilidad: "Disponible"
    }]
    return (
        <div className="Info">
            <h3>Lista de productos</h3>
            <input type="search" name="buscar" id="" placeholder="Ingrese código o estado del producto" />
            <input type="submit" value="Buscar" class="boton" />

            <div className="tabla">

                <table width={400} border={2} align={"left"}>
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Descripción</th>
                            <th>Valor unitario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    {ListarProductos.map((elemento, i) => {
                        return (
                            <tr key={i} >
                                <td>
                                    {elemento.Identificador}
                                </td>
                                <td>
                                    {elemento.Descripcion}
                                </td>
                                <td>
                                    {elemento.Valor}
                                </td>
                                <td>
                                    {elemento.Disponibilidad}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>


        </div>
    );
}

export default Productos;
