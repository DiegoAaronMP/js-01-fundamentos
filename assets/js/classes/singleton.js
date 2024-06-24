



class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;
        
    }
}

const instancia1 = new Singleton('Iron Man');
const instancia2 = new Singleton('Spider Man');


console.log(`El nombre de la instancia1 es: ${instancia1.nombre}`); // Iron Man
console.log(`El nombre de la instancia2 es: ${instancia2.nombre}`); // Iron Man