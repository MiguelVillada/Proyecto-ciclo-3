

import "./CSS/Nav.css";
import Head from "./Components/Head";
import Menu from "./Components/Menu";
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import Usuarios from "./Components/Usuarios";

//import { Fragment } from "react";
//import InfoVentas from "./Components/InfoVentas";
//import Usuarios from "./Components/Usuarios";
//import CrearUsuario from "./Components/CrearUsuario";
//import InfoVentas from "./Components/InfoVentas";
function App() {
  return (
    <Router>
      <Route path="/" component={Head}/>
      <Route path="/" component={Menu}/>

    </Router>
  );
}

export default App;
