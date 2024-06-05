let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Endgame',
};



// ! Estas dos son practicamente lo mismo.
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);


console.log('Latitud', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]); // regresa false

console.log('Ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles

// Borrar una propiedad
delete personaje.edad;

// Mutar objeto directamente
personaje.casado = true;

// Pares. Arreglo
const entriesPares = Object.entries(personaje);

// Evitar mutaciones
Object.freeze(personaje);

// lista de propiedades
const listaPropiedades = Object.getOwnPropertyNames(personaje);

// lista de valores
const listaValores = Object.values(personaje);


