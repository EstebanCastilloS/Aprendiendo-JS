// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let list = ["eat", "sleep", "code", "sex", "repeat"]

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    
}

//-----------------FOR OF---------------------
// for (const element of object) {
    //código a ejecutar
// }

let conasta = ["manzana","pera","naranja","uva"]

for (const fruta of canasta) {
    console.log(fruta)
}

//-------------------FOR IN-------------------

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const listaCompra = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva:1
}

for (fruta in listaCompra)
{
    console.log(fruta)
}

for (fruta in listaCompra)
{
    console.log(`${fruta}: ${listaCompra[fruta]}`)
}

//--------------------- WHILE -----------------

// while (condition) {
    
// }

let contador = 0;

while (contador < 10)
{
    console.log(contador)
    contador++
}

//--------------------- DO WHILE -----------------

// do {
    
// } while (condition);


do {
    console.log(contador)
    contador++
} while (contador < 10);
