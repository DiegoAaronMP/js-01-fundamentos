
const elMayor = (a, b) => {
    return (a > b) ? a : b;
}

const tieneMembresia = (miembro) => {
    return (miembro) ? '2 Dólares' : '10 Dólares';
}

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

const amigo = true;

const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
]

console.log(amigosArr);

const nota = 65; // A+ A B+ B
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});