
// How to create an Array ?

/**
 * 
 */

// 1. new Array() or Array()

const fruits = Array("apple", "banana", "aorange")
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5, 6)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const empyArray = []
console.log(empyArray)

const reicipeIngredients = [
    "Flour",
    true,
    2,
    {
        ingredients: "Milk", quantity: "1 cup"
    },
    false
]

// Accessing array elements

const firtsFruit = fruits[0]

//Tamaño de un array
const numberOfFruits = fruits.length

//MUTABILITY

//Agregar un valor en un array
fruits.push("Piña")
console.log(fruits)

const newFruits = fruits.concat(["grape", "kiwi"])
console.log(fruits)
console.log(newFruits)


//revisando si un array es un array

const isArray = Array.isArray(fruits)
console.log(isArray)

//Practica de ejecicios 

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
    
}
console.log(sum)

