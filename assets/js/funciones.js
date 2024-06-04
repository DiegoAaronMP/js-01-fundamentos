function saludar() {
    console.log('Hola mundo');
}

// Funcion anonima
const saludar2 = function() {
    console.log('Hola mundo');
}

// Con argumentos
function saludar3(nombre) {
    console.log('Hola' + nombre);
}

// Funcion de flecha
const saludarFlecha = () => {
    console.log('Hola mundo');
}

function sumar( a, b ) {
    return a + b;
}

const sumar2 = ( a, b ) => {
    return a + b;
}

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumar(1,3));
