import React from 'react';
import "../CSS/CrearProducto.css";

function CrearProducto() {
    return (
        <div >
        <ul className="Registro">
                <h3>Registro de producto</h3>
                <li>
                    <label for="id producto">Id producto:
                        <input type="number" id="producto" name="id producto" readonly/>
                    </label>
                    <label class="botones">
                        <label for="contactChoice1"><input type="radio" id="contactChoice1"
                        name="opcion" value="Disponible"/>
                        Disponible</label>
                        <label for="contactChoice2"><input type="radio" id="contactChoice2"
                        name="opcion" value="No disponible"/>
                        No disponible</label>
                    </label>

                </li>
                <li>
                    <label for="Nombre">Nombre del producto:
                        <input type="text" id="Nombre" name="Nombre"/>
                    </label>
                    <label for="valor unitario">Valor unitario:
                        <input type="number" id="valor" name="valor unitario"/>
                    </label>
                </li>
                <li>
                <label for="descripcion">Descripción del producto:
                </label>
                </li>
                <li>
                    <textarea name="descripcion" rows="10" cols="45" placeholder="Añade una descripción"></textarea>
                    <button>Registrar producto</button>
                </li>
      
            </ul>
            </div>		
    );
}

export default CrearProducto;
