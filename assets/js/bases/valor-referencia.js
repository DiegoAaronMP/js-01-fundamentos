

// Por valor
let a = 10;
let b = a;
a = 30;
console.log(a,b);

// Por referencia
let juan = {nombre: 'Juan'};
// let ana  = juan; 
// * Romper referencia
let ana  = {...juan}; 
ana.nombre = 'Ana';

// const cambiaNombre = (persona) => {
// * Para romper la referencia es asi 
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});


// Arreglos
const frutas = ['Manzana', 'Pera', 'Uva'];

// const otrasFrutas = frutas;
// * Romper referencia
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');
// Otra forma de hacerlo
// const otrasFrutas = frutas.splice();

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});