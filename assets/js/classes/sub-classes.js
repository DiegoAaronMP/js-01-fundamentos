class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
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

// Herencia
class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        // * super hace referencia a la clase Persona
        super(nombre, codigo, frase);

        this.clan = 'Los Vengadores';
    }

    quienSoy() {
        console.log(`Soy parte de ${this.clan}`);
        // Para no sobreescribir el método padre
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spider Man', 'Soy tu vecino amigable');