var Auto = {
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2019,
    color: 'rojo',
    encendido: 'apagado',
    tipo: 'hatchback',
    radio: ['sony', 'pioneer', 'kenwood'],
}

// document.write('Creación Objeto Auto <br>');
// document.write('Marca: ' + Auto.marca + '<br>');
// document.write('Modelo: ' + Auto.modelo + '<br>');
// document.write('Año: ' + Auto.anio + '<br>');
// document.write('Color: ' + Auto.color + '<br>');
// document.write('Encendido: ' + Auto.encendido + '<br>');
// document.write('Tipo: ' + Auto.tipo + '<br>');
// document.write('Radio: ' + Auto.radio + '<br>');

//Objeto inmutable
// object freeze()
let persona = Object.freeze({
    nombre: 'homero',
    apellido: 'simpson',
    direccion: 'Avenida Siempreviva 742',
    edad: 39,
    telefono: '555-5555',
    email: 'homerosimpson@gamail.com',});

persona.nombre = 'bart';
console.log(persona);

//copia de un objeto
let persona_1 = {
    nombre: 'Esteban',
    edad: 31,
}

const copia_persona1 = {...persona_1, edad: 32, telefono: '555-5555', email: 'esteban@gmail.com'};
console.log(copia_persona1);

//Funciones flechas
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));

const saludar = nombre => `Hola ${nombre}`;
console.log(saludar('Esteban'));

