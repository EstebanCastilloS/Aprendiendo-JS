

//------------------condisionales------------------

let condicion = false;

if(condicion){
    console.log("Condición verdadera");
    console.log("fin del programa");
}
else{
    console.log("Condición falsa");
}


//------------------------------------

let numero = 2;

if( numero == 1 ){
    console.log("Número uno");
}
else if( numero == 2 ){
    console.log("Número dos");
}
else if( numero == 3 ){
    console.log("Número tres");
}
else if( numero == 4 ){
    console.log("Número cuatro");
}
else{
    console.log("Número desconocido");
}

//------------------------------------

let mes = 12;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

//------------------------------------

/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 23;
let mensaje;

if( horaDia >= 6 && horaDia <= 11 ){
    mensaje = "Buenos días";
}
else if( horaDia >= 12 && horaDia <= 18 ){
    mensaje = "Buenas tardes";
}
else if( horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}
else if( horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);

//------------------------------------

let numero1 = 1;

let numeroTexto = 'Valor desconocido';

switch( numero1 ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);

//------------------------------------

let mes1 = 11;
let estacion1 = 'Estación desconocida';

switch( mes1 ){
    case 1: case 2: case 12:
        estacion1 = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion1 = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion1 = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion1 = 'Otoño';
        break;
    default:
        estacion1 = 'Valor incorrecto';                
}
console.log(estacion1);