import React from 'react';
import "../CSS/Nav.css";   
import icono from "../Images/icono.svg";
const Head=() => {
    return (
        
        <div className="Head">
        <p>Nombre de la empresa</p>
          <div>
              <p>Nombre Usuario</p>
              <img src={icono} alt="IconoUsuario"/>
          </div>   
      </div>
    );
}

export default Head;
