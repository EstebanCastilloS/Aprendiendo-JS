
//Programación imperativa
const numeros = [1, 2,3,4,5,6]
let cuadrados = []

for (let i = 0; i < numeros.length; i++) {
    cuadrados.push(numeros[i] * numeros[i]);
}
console.log(cuadrados);


//Funciones declarativas
const numeros_1 = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//map() es un método que crea un nuevo array con los resultados de la llamada a 
//la función indicada aplicados a cada uno de sus elementos.
const cuadradosDeclarativos = numeros_1.map(numero => numero * numero);
console.log(cuadradosDeclarativos);

//filter() es un método que crea un nuevo array con todos los elementos que
//cumplan la condición implementada por la función dada.
const pares = numeros_1.filter(numero => numero % 2 === 0);
console.log(pares);

//reduce() es un método que aplica una función a un acumulador y a cada valor de un array
//(de izquierda a derecha) para reducirlo a un único valor.
const suma = numeros_1.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);

//find() es un método que devuelve el primer elemento de un array que cumpla con la condición dada.
const mayorDiez = numeros_1.find(numero => numero > 10);
console.log(mayorDiez);

//forEach() es un método que ejecuta una función por cada elemento presente en el array en orden.
numeros_1.forEach(function(numero, index) {
    console.log(`En la posición ${index} tenemos el número ${numero}`);
});

//some() es un método que comprueba si al menos un elemento del array cumple con la condición dada.
const menorDiez = numeros_1.some(numero => numero < 10);
console.log(menorDiez);

//every() es un método que comprueba si todos los elementos del array cumplen con la condición dada.
const todosMenoresVeinte = numeros_1.every(numero => numero > 21);
console.log(todosMenoresVeinte);

//includes() es un método que comprueba si un array incluye un determinado elemento, 
//devolviendo true o false según corresponda.
const incluye = numeros_1.includes(10);
console.log(incluye);