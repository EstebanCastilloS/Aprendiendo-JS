// switch (key) {
//     case value1:
            //código
//         break;
//     case value2:
            //código
//         break;

//     default:
//         break;
// }

let epr = "Manzanas"

switch (epr) {
    case "Naranjas":
        console.log("Las Naranjas cuestan $20 el Kilo")
        break;

    case "Manzanas":
        console.log("Las Manzanas cuestan $40 el Kilo")
        break;

    case "Platanos":
        console.log("Las Platanos cuestan $60 el Kilo")
        break;

    default:
        console.log(`Lo siento, no contamos con el producto ${epr}`)
        
}

console.log("Hay algo más que desees?")

