

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('While');

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

// * Al llegar a undefined se considera false y sale del ciclo
while (carros[i]) {
    console.log(carros[i]);
    i++;
}


console.warn('Do While');
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);