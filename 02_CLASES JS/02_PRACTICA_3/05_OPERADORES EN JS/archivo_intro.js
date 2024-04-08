let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);

//----------------------------INCREMENTO Y DECREMENTO----------------------------

let a1 = 3, b1 = 2;
let z1 = a + b1;

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z1 = ++a1;
console.log(a1);
console.log(z1);

//Post-incremento (el operador ++ despues de la variable)
z1 = b++;
console.log(b1);
console.log(z1);

//Decremento
//Predecremento
z1 = --a;
console.log(a1);
console.log(z1);

//Postdecremento
z1 = b1--;
console.log(b1);
console.log(z1);

//-----------------------------PRECEDENCIA DE OPERADORES--------------------------

let a2 = 3, b2 = 2, c2 = 1, d2 = 4;

let z2 = a2 * b2 + c2 / d2;
console.log(z);

z2 = c2 + a2 * b2 / d2;
console.log( z ); 

z2 = (c2 + a2) * b2 / c2;
console.log(z2);

//-----------------------------OPERADORES DE ASIGNACION----------------------------

let a3 = 1;

a3 += 3; // a = a + 3
console.log(a);

a3 -= 2; // a = a - 2
console.log(a3);

/*
*=
/=
%=
**=
*/

//-----------------------------OPERADORES DE COMPARACION----------------------------

let a4 = 3, b4 = 2, c4 = "3";

let z4 = a4 == c4; // se revisa el valor sin importar el tipo
console.log(z4);

z4 = a4 === c4;// revisa los valores pero tambien los tipos
console.log(z4);

z4 = a4 != c4; // se revisa el valor sin importar el tipo
console.log(z4);

z4 = a4 !== c4;// revisa los valores pero tambien los tipos
console.log(z4);

z4 = a4 < b4;
console.log(z4);

z4 = a4 <= b4;
console.log(z4);

z4 = a4 > b4;
console.log(z4);

z4 = a4 >= b4;
console.log(z4);

//-----------------------------OPERADORES LOGICOS----------------------------

let a5 = 3, b5 = 2, c5 = "3";

let z5 = a5 > b5 && a5 != c5;
console.log(z5);

z5 = a5 < b5 && a5 != c5;
console.log(z5);

z5 = a5 > b5 || a5 != c5;
console.log(z5);

z5 = a5 < b5 || a5 != c5;
console.log(z5);

let bandera = true;

z5 = !bandera;
console.log(z5);

//-----------------------------OPERADOR CONDICIONAL (TERNARIO)----------------------------

let a6 = 4, b6 = 3;

let z6 = (a6 > b6) ? "a es mayor que b" : "a es menor que b";
console.log(z6);


let a7 = 3;
let mensaje = (a7 % 2 == 0) ? "Numero par" : "Numero impar";
console.log(mensaje);

a7 = "hola mundo";
mensaje = (a7 % 2 == 0) ? "Numero par" : "Numero impar";
console.log(mensaje);

let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log( resultado );

//Ejercicio

let miNumero = "18";
 //console.log(typeof miNumero);
 
 let edad = Number(miNumero);
 //console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 
let resultado1 = (edad >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado1 );

let resultado2 = (isNaN(edad))? "No es un número" : (edad >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado2 );

// Ejercicio

let miNumero3 = "17";

let edad3 = Number(miNumero3); 
console.log( edad );

if( isNaN(edad3)){
    console.log("No es un número");
}
else{
    if(edad3 >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }    
}

if( isNaN(edad3)){
    console.log("No es un número");
}
else{
    let resultado3 = (edad3 >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado3 ); 
}

