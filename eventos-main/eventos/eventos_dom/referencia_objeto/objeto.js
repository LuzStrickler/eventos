// Obtén los botones por su ID
const botonVerde = document.getElementById("verde");
const botonRojo = document.getElementById("rojo");
const botonAzul = document.getElementById("azul");

// Agrega eventos de clic a los botones
botonVerde.addEventListener("click", () => {
    cambiarColor(botonVerde, "green");
});

botonRojo.addEventListener("click", () => {
    cambiarColor(botonRojo, "red");
});

botonAzul.addEventListener("click", () => {
    cambiarColor(botonAzul, "blue");
});

// Función para cambiar el color del botón
function cambiarColor(boton, color) {
    boton.style.backgroundColor = color;
}
