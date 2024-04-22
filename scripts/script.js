import historia from './data.js';

const mainMenu = document.getElementById('mainMenu');
const juego = document.getElementById('juego');
const botonInicio = document.getElementById('buttonStart');
const parrafo = document.getElementById('parrafo');
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');

let escenaActual = 'inicio';

// Función para mostrar una escena en la interfaz
function mostrarEscena(nombreEscena) {
    const escena = historia[nombreEscena];
    parrafo.textContent = escena.texto;

    if (escena.opciones.length > 0) {
        opcion1.textContent = escena.opciones[0].texto;
        opcion1.addEventListener('click', () => seleccionarOpcion(escena.opciones[0].siguienteEscena));
        opcion1.style.display = 'block';

        opcion2.textContent = escena.opciones[1].texto;
        opcion2.addEventListener('click', () => seleccionarOpcion(escena.opciones[1].siguienteEscena));
        opcion2.style.display = 'block';
    } else {
        opcion1.style.display = 'none';
        opcion2.style.display = 'none';
    }
}

// Función para manejar la selección del jugador
function seleccionarOpcion(siguienteEscena) {
    escenaActual = siguienteEscena;
    mostrarEscena(escenaActual);
}

// Evento para comenzar el juego
botonInicio.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    juego.style.display = 'block';
    mostrarEscena(escenaActual);
});