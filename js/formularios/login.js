const form = document.getElementById("formulario");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const inputs = document.querySelectorAll("#formulario input");

form.addEventListener("submit", (e) =>{
    e.preventDefault()
})

let regCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let regContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/; 

const validar = (e) =>{
    switch(e.target.name){
        case "email":
            if(regCorreo.test(email.value)){
                document.getElementById("grupo-email").classList.remove("grupo-login-incorrecto");
                document.getElementById("grupo-email").classList.add("grupo-login-correcto");
                document.querySelector("#grupo-email .formulario-input_error").classList.remove("formulario-input_error-activo")
            }else{
                document.getElementById("grupo-email").classList.add("grupo-login-incorrecto");
                document.getElementById("grupo-email").classList.remove("grupo-login-correcto");
                document.querySelector("#grupo-email .formulario-input_error").classList.add("formulario-input_error-activo")
            }break
        case "password":
            if(regContraseña.test(pass.value)){
                document.getElementById("grupo-password").classList.remove("grupo-login-incorrecto");
                document.getElementById("grupo-password").classList.add("grupo-login-correcto");
                document.querySelector("#grupo-password .formulario-input_error").classList.remove("formulario-input_error-activo")
            }else{
                document.getElementById("grupo-password").classList.add("grupo-login-incorrecto");
                document.getElementById("grupo-password").classList.remove("grupo-login-correcto");
                document.querySelector("#grupo-password .formulario-input_error").classList.add("formulario-input_error-activo")
            }break
    }
}
    
inputs.forEach((input) => {
    input.addEventListener("keyup",validar);
    input.addEventListener("blur", validar)
})