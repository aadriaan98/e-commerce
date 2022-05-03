const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const regNombre =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
})

const validar = (e) => {
            if(regNombre.test(e.target.value)){
                document.getElementById("grupo-nombre").classList.remove("grupo-formulario-incorrecto");
                document.getElementById("grupo-nombre").classList.add("grupo-formulario-correcto");
                document.querySelector("#grupo-nombre .formulario-input_error").classList.remove("formulario-input_error-activo")
            }
            else{
                document.getElementById("grupo-nombre").classList.add("grupo-formulario-incorrecto");
                document.getElementById("grupo-nombre").classList.remove("grupo-formulario-correcto");
                document.querySelector("#grupo-nombre .formulario-input_error").classList.add("formulario-input_error-activo")
            }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validar)
    input.addEventListener("blur", validar)
})

