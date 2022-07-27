

function Login() {

    let usuario = document.getElementById('user').value;
    let contrasenia = document.getElementById('pass').value;
    if (usuario === '' || contrasenia === '') {
        if (usuario === '') {
            document.getElementById('resultado').innerHTML = "Usuario requerido";
        }
        if (contrasenia === '') {
            document.getElementById('resultado').innerHTML = "Contraseña requerida"
        }
        if(usuario===''&& contrasenia===''){
            document.getElementById('resultado').innerHTML = "Usuario y contraseña requeridos";
        }

    } else {

        document.getElementById('resultado').innerHTML = `Bienvenido, ${usuario}`;
    }

    
}

