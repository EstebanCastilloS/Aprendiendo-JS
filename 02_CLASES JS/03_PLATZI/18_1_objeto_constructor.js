
function Persona(nombre, apellido, edad) {

    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    
}

//creando instancia
const persona1 = new Persona("Esteban", "Castillo", 32)

//agregar propiedades al constructor
//prototype
Persona.prototype.telefono = "222-222-222"
persona1.nacionalidad = "Colombiano"

//agragar métodoso

Persona.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()