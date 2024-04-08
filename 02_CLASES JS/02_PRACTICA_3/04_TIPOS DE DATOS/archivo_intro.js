/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(objecto);
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
//Se usa para identificadores unicos
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arreglo en JavaScript
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z);

//---------------------------------------------------------------

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);