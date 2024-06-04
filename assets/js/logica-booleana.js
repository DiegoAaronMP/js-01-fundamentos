

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion')
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('And'); // True si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false

// ! Si el primero es false, ignora la segunda funcion
console.log(regresaFalse() && regresaTrue()); // Regresa falso false
console.log(regresaTrue() && regresaFalse()); // Regresa true Regresa false false

console.warn('OR'); // Por lo menos uno debe ser true para ser true
console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); // Regresa true true


