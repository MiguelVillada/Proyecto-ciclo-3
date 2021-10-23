import axios from 'axios';
import React from 'react';
import "../CSS/CrearProducto.css";

const  Registro = async ()=>{
    let boton= "No disponible";
    if(document.getElementsByName('opcion')[0].checked){
        boton="Disponible";
    }
    const producto ={
        Estado:boton,
        Identificador:document.getElementById('producto').value,
        Nombre:document.getElementById('Nombre').value,
        Precio:document.getElementById('Valor').value,
        Descripcion:document.getElementById('Descripcion').value,
    }
    try{
        await axios.post('http://localhost:4000/api/productos/crear',producto);
        alert("Guardado exitosamente");
    }catch(error){
        alert("Error al guardar");
    }
}
function CrearProducto() {
    return (
        <div >
        <ul className="Registro">
                <h3>Registro de producto</h3>
                <li>
                    <label for="id producto">Id producto:
                        <input type="number" id="producto" name="id producto" />
                    </label>
                    <label className="botones">
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
                        <input type="number" id="Valor" name="valor unitario"/>
                    </label>
                </li>
                <li>
                <label for="descripcion">Descripción del producto:
                </label>
                </li>
                <li>
                    <textarea id="Descripcion" rows="10" cols="45" placeholder="Añade una descripción"></textarea>
                    <button onClick={()=>Registro()}>Registrar producto</button>
                </li>
      
            </ul>
            </div>		
    );
}

export default CrearProducto;
