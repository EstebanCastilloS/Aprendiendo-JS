
/**
 * estructura de datos
 * key / value
 * objeto {
 *  propiedad: valor,
 *  propiedad: valor,
 *  propiedad: valor
 * }
 * 
 * 
 */

const persona = {
    nombre: "Esteban",
    edad: 32,
    direccion: {
        callle: "Calle 132 44 -12",
        ciudad: "Prados del Sur"
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar()

persona.telefono = "3284129923"
persona.despedir = () =>{
    console.log("Adios")
}
persona.despedir()
console.log(persona)

//borrar datos
//delete persona.direccion
//delete persona.despedir