


let agregar
const usuariosRegistrados = []
const botonLogin = document.getElementById("botonLogin")
const botonRegister = document.getElementById('botonRegister')
const form = document.getElementById("idForm")
const resultadoCard = document.getElementById("resultadoCard")
let datosOk = false



class Usuario {
    constructor(usu, pass) {
        this.usu = usu
        this.pass = pass
    }
}


/* Valido datos */
const validarInfo = (usu) => {
    if (usu.usu === '') {
        resultadoCard.innerHTML = "Usuario requerido";
    }
    else {
        existe = usuariosRegistrados.indexOf(usu)
        if (existe === -1) {
            if (usu.pass === '') {
                resultadoCard.innerHTML = "Contraseña requerida"
            } else {
                datosOk = true
            }
        }
    }
}



/* Registro Usuario */
botonRegister.addEventListener('click', () => {
    let usuario = document.getElementById('user').value;
    let contrasenia = document.getElementById('pass').value;
    const unUsuario = new Usuario(usuario, contrasenia)
    validarInfo(unUsuario)
    if (datosOk) {
        let usuarioRegistrado = false
        usuariosRegistrados.forEach(unUsu => {
            if (unUsu.usu === unUsuario.usu && unUsu.pass === unUsuario.pass) {
                resultadoCard.innerHTML = "Usuario antes registrado"
                usuarioRegistrado = true
            }
            

        })
        if (!usuarioRegistrado) {
            registroUsuario(unUsuario)
        }
    }

})




const registroUsuario = (usu) => {
    console.log(usuariosRegistrados)
    usuariosRegistrados.push(usu)
    console.log(usuariosRegistrados)
    resultadoCard.innerHTML = "Registro correcto"
}


/* Login */
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let usuario = document.getElementById('user').value;
    let contrasenia = document.getElementById('pass').value;
    const unUsuario = new Usuario(usuario, contrasenia)
    datosOk = false
    validarInfo(unUsuario)
    if (datosOk) {
        let usuarioRegistrado = false
        usuariosRegistrados.forEach(unUsu => {
            if (unUsu.usu === unUsuario.usu && unUsu.pass === unUsuario.pass) {
                resultadoCard.innerHTML = "Usuario antes registrado"
                usuarioRegistrado = true
            }
            if (usuarioRegistrado) {
                resultadoCard.innerHTML = `
                    <div class="card" style="width: 18rem; margin:3px;">
                        <div class="card-body">
                            <h5 class="card-title">Bienvenido,${unUsuario.usu}</h5>
                        </div>
                    </div>
                    
                    `
            }

        }


        )

        if (!usuarioRegistrado) {
            resultadoCard.innerHTML = "Usuario no registrado"

        }
    }

})











