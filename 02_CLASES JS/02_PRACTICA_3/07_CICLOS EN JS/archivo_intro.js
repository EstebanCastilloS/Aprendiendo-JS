
//----------------------CICLOS DE CONTROL JS----------------------

let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

//------------------------------------------------------------------
let contador1 = 0;
/*
while( contador < 3 ){
    console.log(contador);
    contador++;
}
*/

do{
    console.log(contador1);
    contador1++;
}while(contador1 < 3);
console.log("Fin ciclo do while");

//------------------------------------------------------------------

/*
let contador = 0;
while( contador < 3 ){
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/

for(let contador2 = 0; contador2 < 3 ; contador2++ ){
    console.log(contador2);
}
console.log("Fin ciclo for");

//------------------------------------------------------------------

for(let contador3 = 0; contador3 <= 10; contador3++){
    if( contador3 % 2 !== 0){
		 console.log(contador3);
        break;//termina la ejecución del ciclo for por completo 
    }
   
}

//------------------------------------------------------------------

for(let contador4 = 0; contador4 <= 10; contador4++){
    if( contador4 % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }
    console.log(contador4);
}

//------------------------------------------------------------------

inicio:
for(let contador5 = 0; contador5 <= 10; contador5++){
    if( contador5 % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador5);
}