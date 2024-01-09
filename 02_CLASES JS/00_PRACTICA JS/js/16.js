const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']
const numeros = [10, 20, 30]

// Includes = retorna true o false 
let resultado = tecnologias.includes('Git')

// FindIndex = retorna el indice de la busqueda
resultado = tecnologias.findIndex(tech => tech === 'Git')

// Some = retorna true o false
resultado = numeros.some(numero => numero > 35)

// Find = retorna el valor de la busqueda
resultado = numeros.find(numero => numero === 5)

// Every = retorna true o false en los cuales todos los valores deben cumplir la condicion
resultado = numeros.every(numero => numero > 1)

// Reduce = retorna un valor unico
resultado = numeros.reduce( (total, numero) => numero + total, 0)

// Filter = retorna un array con los valores que cumplan la condicion
resultado = tecnologias.filter( tech => tech === 'Vue.js')


console.log(resultado)