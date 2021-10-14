import React from 'react';
import "../CSS/RegistrarVenta.css";
function RegistroVenta() {
    return (
        <div>
             <ul class="Derecho">
                <h3>Registro de ventas</h3>
                <li>
                    <label for="Id Venta">Identificador de venta:
                    <input type="number"   id="Venta" name="Id Venta" readonly placeholder="123456789"/>
                    </label>
                    <label for="Fecha">Fecha:
                    <input type="datetime-local" id="Fecha" name="Fecha" />
                    </label>
                </li>
                <li>
                    <label for="Id Producto">Id producto:
                    <input type="number" id="Id Producto" name="Id Producto"  />
                    </label>
                    <label for="Cliente">Cliente:
                    <input type="text" id="Cliente" name="Cliente"  />
                    </label>
                </li>
                <li>
                    <label for="Precio">Precio: $
                    <input type="number" id="Precio" name="Precio" readonly />
                    </label>
                    
                    <label for="Documento">N° Documento:
                    <input type="number" id="Documento" name="Documento"  />
                    </label>
                    
                </li>
                <li>
                    <label for="Cantidad">Cantidad:
                    <input type="number" id="Cantidad" name="Cantidad"  />
                    </label>
                    <label for="Vendedor">Vendedor:
                    <input type="text"  id="Vendedor" name="Vendedor" autocomplete="name" />
                    </label>
                </li>
                
                <li>
                    <label for="Valor Total">Valor total: $
                    <input type="number" id="Valor" name="Valor Total" readonly />
                    </label>
                    <button>Registrar venta</button>
                </li>
                
            </ul>
        </div>
    )
}

export default RegistroVenta;
