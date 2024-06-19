
const diego = {
    nombre: 'Diego',
    edad: 23,
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 35
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(this.nombre, this.edad);
    };
}

const maria = new Persona('Maria', 18);
maria.imprimir();


