let numeros = [];
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write('Elementos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]<br>');
document.write('Elementos',numeros,'<br><br>');

//primer elemento
document.write('Buscando el Primer elemento: <br>');
document.write('Primer elemento: ',numeros[0],'<br><br>');

//ultimo elemento
document.write('Buscando el último elemento: <br>');
document.write('Ultimo elemento: ',numeros[numeros.length-1],'<br><br>');

let frutas = ['manzana ', 'pera ', 'uva ', 'sandia ', 'melon'];
document.write('Elementos: [manzana, pera, uva, sandia, melon] <br>');
document.write('Elementos: ',frutas,'<br><br>');

//ver cantidad de elementos
document.write('ver cantidad de elementos<br>');
document.write('Cantidad de elementos: ',frutas.length,'<br><br>');

//ver el último elemento de frutas
document.write('ver el último elemento de frutas<br>');
document.write('Ultimo elemento: ',frutas[frutas.length-1],'<br><br>');

//convertir array numeros en tetxo
document.write('convertir array numeros en tetxo<br>');
let texto = numeros.join();
document.write('Texto: ',texto,'<br>');
document.write('Texto: ',numeros.toString(),'<br><br>');

//unir dos arrays
//concat()
document.write('unir dos arrays<br>');
let union = numeros.concat(frutas);
document.write('Union: ',union,'<br><br>');

//Buscar un elemento en un array
//includes()
document.write('Buscar un elemento en un array --includes()-- <br>');
let buscar = frutas.includes('pera');
document.write('Buscar: pera: ',buscar,'<br><br>');

//Buscar un elemento en un array, me retorna la posición del elemento buscado
//indexOf()
document.write('Buscar un elemento en un array, me retorna la posición del elemento buscado --indexOf()-- <br>');
let buscar2 = frutas.indexOf('pera');
document.write('Buscar: pera: ',buscar2,'<br><br>');

//borrar el último elemento de frutas
//pop()
document.write('borrar el último elemento de frutas --pop()-- <br>');
frutas.pop();
document.write('Frutas: ',frutas,'<br><br>');

//agregar un elemento al final de frutas
//push()
document.write('agregar un elemento al final de frutas --push()-- <br>');
frutas.push('mango');
document.write('Frutas: ',frutas,'<br><br>');

//borrar el primer elemento de frutas
//shift()
document.write('borrar el primer elemento de frutas --shift()-- <br>');
frutas.shift();
document.write('Frutas: ',frutas,'<br><br>');

//agregar un elemento al principio de frutas
//unshift()
document.write('agregar un elemento al principio de frutas --unshift()-- <br>');
frutas.unshift('kiwi');
document.write('Frutas: ',frutas,'<br><br>');

//eliminar elementos a partir de la posición x
//splice()
document.write('Eliminar elementos a partir de la posición x --splice()-- <br>');
frutas.splice(2,2);
document.write('Frutas: ',frutas,'<br><br>');

//agregar elementos a partir de la posición x
//splice()
document.write('Agregar elementos a partir de la posición x --splice()-- <br>');
let copyfrutas = frutas.splice(2,0,'pera','uva');
document.write('Frutas: ',frutas,'<br><br>');

//copiar un array
//slice()
document.write('Copiar un array --slice()-- <br>');
let copia = frutas.slice();
document.write('Copia: ',copia,'<br><br>');

//ordenar un array
//sort()
document.write('Ordenar un array --sort()-- <br>');
frutas.sort();
document.write('Frutas: ',frutas,'<br><br>');

//invertir un array
//reverse()
document.write('Invertir un array --reverse()-- <br>');
frutas.reverse();
document.write('Frutas: ',frutas,'<br><br>');




