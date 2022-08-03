


let usuariosRegistrados = []


function Login() {

    let usuario = document.getElementById('user').value;
    let contrasenia = document.getElementById('pass').value;
    let existe
    let valido = false
    let agregar

    if (usuario === '') {
        document.getElementById('resultado').innerHTML = "Usuario requerido";
    } else {
        existe = usuariosRegistrados.indexOf(usuario)
        if (existe === -1) {
            if (contrasenia === '') {
                document.getElementById('resultado').innerHTML = "Contraseña requerida"
            } else {

                

                usuariosRegistrados.push(usuario)
            }
        } else {
            alert(`Bienvenido, ${usuario}`);
        }
    }

}




