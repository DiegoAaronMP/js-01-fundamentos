

// function crearPersona(nombre, apellido) {
//     // Retorna un objeto
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }
const crearPersona = (nombre, apellido) => {
    // Retorna un objeto
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Diego', 'Macias');
const {apellido} = crearPersona('Diego', 'Macias');

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    // console.log(args);
    return args;
}
// const argumentos = imprimeArgumentos(10, true, false, 'Hola');

// Nombrar directamente los argumentos
const [edad, vivo, casado, saludo] = imprimeArgumentos(10, true, false, 'Hola');

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

// ! No recomendado
// const imprimePropiedades = (personaje) => {
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes,}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);