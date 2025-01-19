
//FUNCIONES PURAS

// Side Effects  -> Efectos secundarios
// 1. // -> Función impura
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimer mensajes en pantalla consola
// 5. Manipulación del DOM
// 6. Obtener la Hora Actual

function sum(a, b) {
    return a + b;
} // -> función pura

function sum(a, b) {
    console.log("A: "+ a)
    return a + b;
} // -> Función impura

let total = 0

function sumWithSideEffect(a) {
    total += a
    return total
} // -> Función impura - Función impura

