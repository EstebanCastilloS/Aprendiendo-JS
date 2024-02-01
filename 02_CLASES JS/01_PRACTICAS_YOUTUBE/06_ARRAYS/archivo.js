let numeros = [];
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write('Elementos',numeros,'<br>');

//primer elemento
document.write('Primer elemento: ',numeros[0],'<br>');

//ultimo elemento
document.write('Ultimo elemento: ',numeros[numeros.length-1],'<br>');

let frutas = ['manzana ', 'pera ', 'uva ', 'sandia ', 'melon'];
document.write('Elementos: ',frutas,'<br>');

//ver cantidad de elementos
document.write('Cantidad de elementos: ',frutas.length,'<br>');

//ver el último elemento de frutas
document.write('Ultimo elemento: ',frutas[frutas.length-1],'<br>');

//convertir array numeros en tetxo
let texto = numeros.join();
document.write('Texto: ',texto,'<br>');

document.write('Texto: ',numeros.toString(),'<br>');

//unir dos arrays
let union = numeros.concat(frutas);
document.write('Union: ',union,'<br>');

//borrar el último elemento de frutas
frutas.pop();
document.write('Frutas: ',frutas,'<br>');

//agregar un elemento al final de frutas
frutas.push('mango');
document.write('Frutas: ',frutas,'<br>');

//borrar el primer elemento de frutas
frutas.shift();
document.write('Frutas: ',frutas,'<br>');

//agregar un elemento al principio de frutas
frutas.unshift('kiwi');
document.write('Frutas: ',frutas,'<br>');

//eliminar elementos a partir de la posición x
frutas.splice(2,2);
document.write('Frutas: ',frutas,'<br>');

//agregar elementos a partir de la posición x
frutas.splice(2,0,'pera','uva');

//copiar un array
let copia = frutas.slice();
document.write('Copia: ',copia,'<br>');

//ordenar un array
frutas.sort();
document.write('Frutas: ',frutas,'<br>');

//invertir un array
frutas.reverse();
document.write('Frutas: ',frutas,'<br>');




