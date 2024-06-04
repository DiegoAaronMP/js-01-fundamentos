


let a = 5;

// if (a > 10) {
//     console.log('A es mayor a 10');
// } else {
//     console.log('A es menor a 10');
// }

// console.log('Fin de programa');




const hoy = new Date();
let dia = hoy.getDay(); // 0 domingo, 1 lunes, 2 martes...

// console.log(hoy);

// if (dia === 0) {
//     console.log('Es domingo');
// } else {
//     console.log('No es domingo');

//     if (dia === 1) {
//         console.log('Lunes');
//     } else {
//         console.log('No es lunes ni domingo');
//     }
// }


// Sin usar if else o switch, usar objetos

const diaLetras = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miércoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sábado',
};

console.log(diaLetras[3] || 'No valido');