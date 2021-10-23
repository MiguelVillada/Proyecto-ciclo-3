import axios from 'axios';
import React from 'react';
import "../CSS/RegistrarVenta.css";

const onChangeCantidad = () =>{
    let can = document.getElementById("Cantidad").value;
    let pre = document.getElementById("Precio").value;
    document.getElementById("Valor").value=(can*pre);
}
const registrar = async () => {
    
    const objeto={
        Fecha: document.getElementById("Fecha").value,
        Id_Producto: document.getElementById("Id_Producto").value,
        Cliente:document.getElementById("Cliente").value,
        Precio_unitario :document.getElementById("Precio").value,
        Id_Cliente:document.getElementById("Documento").value,
        Vendedor:document.getElementById("Vendedor").value,
        Valor:document.getElementById("Valor").value,
        Cantidad:document.getElementById("Cantidad").value
    }
    try{
    const res = await axios.post('http://localhost:4000/api/ventas/crear',objeto);
    alert("Venta registrada");
    }catch(error){
        alert("Error al registrar venta");
    }
        
}
function RegistroNuevaVenta(props) {
    return (
        <div>
            <ul className="Derecho">
                <h3>Registro de ventas</h3>
                <li>
                    <label for="Id_Venta">Identificador de venta:
                        <input type="text" id="Venta" name="IdVenta" readOnly
                            defaultValue={props._id} />
                    </label>
                    <label for="Fecha">Fecha:
                        <input type="datetime-local" id="Fecha" name="Fecha"
                            defaultValue={props.Fecha} />
                    </label>
                </li>
                <li>
                    <label for="Id Producto">Id producto:
                        <input type="text" id="Id_Producto" name="Id Producto"
                            defaultValue={props.Id_Producto} />
                    </label>
                    <label for="Cliente">Cliente:
                        <input type="text" id="Cliente" name="Cliente"
                            defaultValue={props.Cliente} />
                    </label>
                </li>
                <li>
                    <label for="Precio">Precio: $
                        <input type="number" id="Precio"
                            name="Precio"
                            defaultValue={props.Precio_unitario} />
                    </label>

                    <label for="Documento">N° Documento:
                        <input type="text" id="Documento" name="Documento"
                            defaultValue={props.Id_Cliente} />
                    </label>

                </li>
                <li>
                    <label for="Cantidad">Cantidad:
                        <input type="number" id="Cantidad" name="Cantidad"
                            defaultValue={props.Cantidad} 
                            onChange={onChangeCantidad}/>
                    </label>
                    <label for="Vendedor">Vendedor:
                        <input type="text" id="Vendedor" name="Vendedor" autoComplete="name"
                            defaultValue={props.Vendedor} />
                    </label>
                </li>

                <li>
                    <label for="Valor Total">Valor total: $
                        <input type="number" id="Valor" name="Valor Total" readOnly
                            defaultValue={props.Precio_unitario * props.Cantidad} />
                    </label>
                    <button onClick={() => registrar(props._id)}>Registrar venta</button>
                </li>
                {console.log(props)}
            </ul>
        </div>
    )
}


export default RegistroNuevaVenta;
