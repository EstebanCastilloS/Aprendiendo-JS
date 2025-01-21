
/**
 * clases
 * funciones constructoras
 * prototipo
 * 
 */

class Animal{

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    emitirSonido(){
        console.log(`El animal emite un sonido`)
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }

    emitirSonido() {
        console.log(`El perro ladra`);
    }

    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }    
}

const perro1 = new Perro("Cayser", "Perro", "Pug");
console.log(perro1);
console.log(perro1.correr());
console.log(perro1.emitirSonido());

perro1.nuevoMetodo = function() {
    console.log("Este es un nuevo método")
}

perro1.segundoMetodo = function() {
    console.log("Este es un segundo método")
}

Perro.prototype.tercerMetodo = function(){
    console.log("Este es un tercer método")
}

console.log(perro1);
console.log(perro1.tercerMetodo());
