
function calculateDiscountedPrice(price, discountPercentage) {

    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
    
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $'+ originalPrice)
console.log('Discount: $'+ discountPercentage)
console.log('price with siscount: $'+ finalPrice)

//Capacidades que tienen las funiones al igual que otros ojetos

//1. Pasar funciones como argumentos -> callback

function a () {}
function b(a) {}
b(a)

// Retornar funciones

function a () {

    function b() {
        return b
    }
}

// Asignar funciones a variables -> epresion de función

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions

function a () {

    function b() {
        
        function c() {
        
        }

        c()
    }
    b()
}

// Es posibele almacenar funciones en objetos

const rocket = {

    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('Hola')
    }
}


