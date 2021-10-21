import React from 'react';
import "../CSS/Login.css";
import GoogleLogin from 'react-google-login';

const responseGoogle = (resp) => {
    console.log(resp);
}

function Login() {
    return (
        <div class="container">
            <div class="contenedor_login">
                <div class="contenedor_form">
                    <form action="" class="form_login">
                        
                        <label for="name">Usuario:</label>
                        <input type="name" placeholder="" />
                        <label for="pass">Contraseña:</label>
                        <input type="pass" placeholder="" />
                        <input type="submit" value="Ingresar" />
                        
                        <GoogleLogin
                            clientId="278817189861-ipvo7fc8j8j5a2a6vrmioqj0ta8qdoin.apps.googleusercontent.com"
                            buttonText="Iniciar con Google"
                            // onSuccess={responseGoogle}
                            // onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </form>
                </div>

                <p></p>
                <div id="my-signin2"></div>
            </div>
        </div>


    );


}

export default Login;
