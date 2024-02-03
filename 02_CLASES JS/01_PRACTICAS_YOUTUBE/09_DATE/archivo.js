
const fechaactual = new Date();

document.write(fechaactual, '<br>');

let fecha = new Date();
document.write('Hoy es: '+fecha.getDate(), '<br>');
document.write('El mes es: '+(fecha.getMonth()+1), '<br>');
document.write('El año es: '+fecha.getFullYear(), '<br>');