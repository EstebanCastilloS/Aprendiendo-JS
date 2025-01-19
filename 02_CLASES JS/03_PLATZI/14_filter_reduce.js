
/**
 * SELECCIONANDO CON FILTER
 * 
 * CREA UN NUEVO ARRAY CON ELEMENTOS QUE CUMPLEN UNA CONDICIÓN DADA POR UNA FUNCIÓN
 */

//filter 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(evenNumbers)

/**
 * SINTETIZADO DATOS CON REDUCE
 * 
 * Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
 * 
 */

const numbersReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20]
const sum =numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

// reduce que tanto se repite una palabra en un array

const word = ["apple", "banana", "hello", "bye", "banana", "bye", , "bye" ]

const wordFrecuency = word.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    } else{
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)