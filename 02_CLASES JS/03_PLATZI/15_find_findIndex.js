
/**
 * FIND
 * 
 * DEVUELVE EL VALOR DEL PRIMER ELEMENTO DEL ARRAY QUE CUMPLE LA FUNCIÓN DE PRUEBA PROPORCIONADA
 */

const multipleOf5 = [5, 10, 15, 20, 25, 30]

const firtsNumberGreaterThan10 = multipleOf5.find(number => number > 15)
console.log(multipleOf5)
console.log(firtsNumberGreaterThan10)

//findIndex

const randowNumbers = [15, 20, 25, 30]
const indexNumber = randowNumbers.findIndex(number => number > 20)
console.log(randowNumbers)
console.log(indexNumber)