//Asincronismo, Promesas, Callbacks, async await

//Sincronismo
console.log('Paso 1');
console.log('Paso 2');
console.log('Paso 3');

//Asincronismo
console.log('Paso 1');
setTimeout(() => {
    console.log('Paso 2');
}, 0);
console.log('Paso 3');


mostrarMensaje = (mensaje ,funcionCallback) => {
    console.log('mensaje recibido', mensaje);
    setTimeout(() => {
        funcionCallback();
    }, 5000);
}

funcionCallback = () => {
    console.log('Callback ejecutado');
}

mostrarMensaje('Mensaje de prueba', funcionCallback);

//Promesas
// definicion de promesas: objeto que representa la terminación o el fracaso de una operación asíncrona
// y su valor resultante.
// Las promesas se pueden resolver o rechazar.
// Las promesas se pueden encadenar.
// Las promesas se pueden anidar.
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Se resolvió la promesa');
    }, 3000);
});

const obtenerNumeroAleatorio = () => {
    return new Promise((resolve, reject) => {
        const numero = Math.random();

        if (numero > 0.5) {
            resolve(numero);
        } else {
            reject('El número es Menor o igual 0.5');
        }
    });
}

obtenerNumeroAleatorio().then((numero) => {
    console.log('Número obtenido:', numero);
}).catch((error) => {
    console.log('Error:', error);
});

//Async Await

const obtenerMostrarNumeroAleatorio = async () => {
    try {
        const numero = await obtenerNumeroAleatorio();
        console.log('Número obtenido:', numero);

    } catch (error) {
        console.log('Error:', error);
    }
}

obtenerMostrarNumeroAleatorio();
