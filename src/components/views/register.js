/* eslint-disable eol-last */

export const register = () => `<div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
    <h1>Crear Usuario</h1>
    <form class="buttonsWrapper" action="" method="post">
          <label for="name">Nombre</label>
          <input  id="name" class="user" type="text" placeholder="Ingresa tu Nombre" value="Yick">
          <label for="email">Correo electrónico</label>
          <input  id="email" class="user" type="text" placeholder="Ingresa tu email" value="email@gmail.com">
          <label for="password">Contraseña</label>
          <input id="password" class="user" type="password" placeholder="********" value="123">
          <i class="far fa-eye passwordEye"></i><br>
          <label id="textRepeatPassword" for="repeatpassword">Repetir contraseña</label>
          <input id="repeatPassword" class="user" type="password" placeholder="********" value="123">
          <i class="far fa-eye passwordEye"></i>
          <p id="errorInfo" class="error-message hide">Verifique sus datos y vuelva a intentar</p>
          <p id="errorUserCreated" class="error-message hide">Usuario ya registrado</p>
        <div class="container-buttons">
         <button type="button" class="button" id="registerUser"><span>Registrate</span></button>
        </div>
        <button id="linkWithGoogle" type="button" class="button"><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/><span>Vincular Cuenta con Google</span></button>
    <!-- <button id="outGoogle" type="button">Logout</button> -->
    </form>
    </div>`;
