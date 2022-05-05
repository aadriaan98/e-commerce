document.addEventListener("keyup", (e) => {
    
    if(e.target.matches("#input-buscar")){

        document.querySelectorAll(".articulo").forEach( articulo => {

            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())

                ?articulo.classList.remove("filtro")

                :articulo.classList.add("filtro")
        })
    } 
})