//AMPLIANDO ARRAYS
/**
 * push() ->
 * AÑADE UNO O MÁS ELEMENTOS AL FINAL DE UNA ARRAY Y DEVUELVE LA NUEVA LONGITUD DEL ARRAY
 */

// Métodos que modifican el origen del Array (Mutabilidad)

//push

const countries = ["USA", "Canada", "UK"]
const newCountries = countries.push("Germany", "Australia")

console.log(countries)
console.log(newCountries)

//pop
const removeCountry = countries.pop()
console.log(countries)
console.log(removeCountry)

