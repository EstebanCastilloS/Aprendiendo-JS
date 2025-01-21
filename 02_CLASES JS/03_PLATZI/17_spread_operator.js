
/**
 * 
 * SPREAD
 * 
 * 
 */

//COPIA DE UN ARRAY

const originalArray = [1, 2, 3, 4, 5]
const copyArray = [...originalArray]

console.log(originalArray)
console.log(copyArray)

//COMBINACIÓN DE ARRAY

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//Crear Array con adicionar elementos 

const arrayBase = [1, 2, 3, 4, 5]
const arrayWithAdditionalElements = [...arrayBase, 6, 7, 8, 9, 10 ]

console.log(arrayBase)
console.log(arrayWithAdditionalElements)

//Pasar elementos a una función

function sum(a, b, c) {
    return a + b + c 
}
const numbrs = [1, 2, 3]
const result = sum(...numbrs)
console.log(result)