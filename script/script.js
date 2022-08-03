


    let agregar
    let usuariosRegistrados = []

const registroUsuario = (usu) => {
    do {
        agregar = prompt('Usuario no registrado, registrar?S/N').toLowerCase()
        debugger
    } while (agregar !== 's' && agregar !== 'n')

    if (agregar === 's') {
        debugger
        usuariosRegistrados.push(usu)
        document.getElementById('resultado').innerHTML = "Registro correcto"
    }else{
        alert('Gracias por visitarnos')
    }

}

function Login() {

    let usuario = document.getElementById('user').value;
    let contrasenia = document.getElementById('pass').value;
    let existe

    if (usuario === '') {
        document.getElementById('resultado').innerHTML = "Usuario requerido";
    } else {
        existe = usuariosRegistrados.indexOf(usuario)
        if (existe === -1) {
            if (contrasenia === '') {
                document.getElementById('resultado').innerHTML = "Contraseña requerida"
            } else {
                registroUsuario(usuario)
            }
        } else {
            alert(`Bienvenido, ${usuario}`);
        }
    }

}






