
/** 
 * TRANSFORMANDO CON MAP
 * 
 * Permite aplicar una función a cadena elemento de un array y construir un nuevo array con los resultados
 */

//map

const numbers = [1, 2, 3, 4 ,5]

const squaredNumbers = numbers.map(num => num * num )
console.log(squaredNumbers)


/**
 * EXPLORANDO CON forEach
 * 
 * ITERA SOBRE CADA ELEMENTO DE UNA ARRAY Y EJECUTA UNA FUNCIÓN PROPORCIONADA PARA CADA ELEMNTO,
 * SIN CREAR UN NUEVO ARRAY
 */

const colors = ["red", "pink", "blue"]
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// ejercicois de temperaturas 
/**
 * Fahrenheit to Celsius conversion
 * 
 * Create a program that takes an array of temperatures in Fahrenheit as input and converts then to Celsius
 * using the formula: C= 5/9 * (F-32)
 * 
 */

const temperaturesInFahrenheit = [32, 68, 95, 104, 212, 150, 256]
const temperaturesInCelsius = temperaturesInFahrenheit.map(Fahrenheit => 5/9 * (Fahrenheit-32))

console.log("Temperatures In Fahrenheit: "+ temperaturesInFahrenheit)
console.log("Temperatures In Celsius: "+ temperaturesInCelsius)