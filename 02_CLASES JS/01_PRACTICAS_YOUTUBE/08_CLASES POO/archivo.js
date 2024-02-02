
class Persona {
    nombre = 'homero';
    apellido = 'simpson';
    direccion = 'Avenida Siempreviva 742';
    edad = 39;
    telefono = '555-5555';
    email = 'amantedelacomida@gmail.com';

    trabajar() {
        return 'trabajando en la planta nuclear';
    }

    estudiar() {
        return 'estudiando en la universidad de Springfield';
    }

    dormir() {
        return 'Ahora es mi hora de mimir zzzz';
    }
}

const homero = new Persona();
document.write(homero.nombre +''+homero.apellido+ '<br>');
document.write(homero.trabajar()+ '<br>');
document.write(homero.estudiar()+ '<br>');
document.write(homero.dormir()+ '<br>');

