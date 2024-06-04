let juegos = ['Zelda', 'Mario', 'Metroid', 'Pikmin'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo  = juegos[juegos.length - 1];

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

// Insertar elemento al inicio del arreglo.
nuevaLongitud = juegos.unshift('Xenoblade')
console.log(nuevaLongitud);

// borrar elemento del final
let juegoBorrado = juegos.pop();
console.log(juegoBorrado);

// borra en una posicion especifica
let pos = 1;
juegos.splice(pos, 2); // Borra dos elementos a partir de la posicion pos
// ! borraria zelda y mario

// saber la posicion de un elemento
let metroidIndex = juegos.indexOf('Metroid');