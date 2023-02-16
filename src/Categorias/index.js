let nombre = "";
obtener_nombreLS();
function obtener_nombreLS() {
    nombre = localStorage.getItem("nombre");
    const objetivo = document.getElementById('mensaje');
    objetivo.innerHTML = "Bienvenida " + nombre;
}

function guardarCategoriaElegida(categoria) {
    localStorage.setItem("categoria", categoria);
    location.href = "../preguntas/index.html";
}

function salir() {
    location.href = "../../index.html";
}