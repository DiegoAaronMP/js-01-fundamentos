

class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }

    // Propiedades
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    // Setters y Getters
    // ! El set No puede tener el mismo nombre que la propiedad
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

// ! NO RECOMENDADO. Crear propiedades static fuera de class
Persona.propiedadExterna = 'Hola mundo';