import axios from 'axios';
import React from 'react';
import "../CSS/CrearProducto.css";

const actualizar = async (iden) => {
    let boton = "No Disponible";
    if (document.getElementsByName('opcion')[0].checked) {
        boton = "Disponible";
    }
    const producto = {
        Estado: boton,
        Identificador: document.getElementById('producto').value,
        Nombre: document.getElementById('Nombre').value,
        Precio: document.getElementById('Valor').value,
        Descripcion: document.getElementById('Descripcion').value,
    }
    try {
        await axios.put('http://localhost:4000/api/productos/' + iden, producto);
        alert("Actualizado exitosamente");
    } catch (error) {
        alert("Error al actualizar");
    }
}
function GestionarProducto(producto) {
    return (
        <div >
            <ul className="Registro">
                <h3>Gestionar producto</h3>
                <li>
                    <label for="id producto">Id producto:
                        <input type="text" id="producto" name="id producto"
                            defaultValue={producto._id}
                            readOnly />
                    </label>
                    <label className="botones">
                        <label for="contactChoice1"><input type="radio"
                            id="contactChoice1"
                            name="opcion" value="Disponible"
                            selected={(producto.Estado === "Disponible")} 
                            />
                            Disponible
                        </label>
                        <label for="contactChoice2"><input type="radio" id="contactChoice2"
                            name="opcion" value="No disponible"
                            selected={(producto.Estado === "No disponible")}/>
                            No disponible</label>
                    </label>

                </li>
                <li>
                    <label for="Nombre">Nombre del producto:
                        <input type="text" id="Nombre" name="Nombre"
                            defaultValue={producto.Nombre} />
                    </label>
                    <label for="valor unitario">Valor unitario:
                        <input type="number" id="Valor" name="valor unitario"
                            defaultValue={producto.Precio} />
                    </label>
                </li>
                <li>
                    <label for="descripcion">Descripción del producto:
                    </label>
                </li>
                <li>
                    <textarea id="Descripcion" rows="10" cols="45"
                        placeholder="Añade una descripción"
                        defaultValue={producto.Descripcion}
                    ></textarea>
                    <button onClick={() => actualizar(producto._id)}>Actualizar producto</button>
                </li>

            </ul>
        </div>
    );
}

export default GestionarProducto;
