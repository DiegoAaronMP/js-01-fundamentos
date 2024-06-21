

class Persona {
    // Propiedades
    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    // Métodos
    quienSoy() {
        console.log(`Soy ${nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider Man', 'Soy tu vecino amigable');
const ironman = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');

spiderman.quienSoy();
ironman.miFrase();

