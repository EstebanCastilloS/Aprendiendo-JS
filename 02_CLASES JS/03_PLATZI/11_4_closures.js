
/**
 * 
 * CLOSURE: Función que tiene acceso a variables de un ámbito eterno, incluso despues de que esa función haya
 * terminado de ejecutarse.
 * 
 * Ámbito léico:cada vez que se declara una funció, crea su propio ámbito léxico y puede acceder a las
 * variables dentro de ese ámbito y a las variables en ámbito superiores.
 * 
 */

function outerFuntion() {

    let outherVariable = "I am from outer function"

    function innterFunction() {
        console.log(outherVariable)
    }
    
    return innterFunction
}

const closureExample = outerFuntion()
closureExample()

function createCounter() {
    let count = 0

    return function () {
        count ++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()
counterB()
counterB()

function outer() {
    let message = "Hello, "

    function inner(name) {

        console.log(message + name)        
    }
    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Esteban")
closureB("Rossmary")

