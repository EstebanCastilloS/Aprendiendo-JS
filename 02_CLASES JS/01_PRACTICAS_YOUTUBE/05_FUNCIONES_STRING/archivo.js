
let palabra ='Javascript';
document.write('La palabra es: ', palabra,'<br>');

//ver tamaño de la palabra
document.write('El tamaño de la palabra es: ', palabra.length,'<br>');

//ver caracteres especificos con slice
document.write('Los caracteres de la palabra son: ', palabra.slice(0,4),'<br>');

//ver caracteres especificos con substring
document.write('Los caracteres de la palabra son: ', palabra.substring(0,4),'<br>');

//cambiar valores en un texto
let saludo = 'Hola a todos';
saludo = saludo.replace('todos',' mis amigos');
document.write('El saludo es: ', saludo,'<br>');

//poner en mayusculas
let palabraMayuscula = palabra.toUpperCase();
document.write('La palabra en mayusculas es: ', palabraMayuscula,'<br>');

//poner en minusculas
let palabraMinuscula = palabra.toLowerCase();
document.write('La palabra en minusculas es: ', palabraMinuscula,'<br>');

//concatenar
let palabra1 = 'Hola';
let palabra2 = 'Mundo';
let frase = palabra1.concat(' ',palabra2);
document.write('La frase es: ', frase,'<br>');

//buscar una palabra
let texto = 'Hola, soy un texto de prueba';
let buscar = texto.indexOf('soy');
document.write('La palabra esta en la posicion: ', buscar,'<br>');

//buscar una palabra
let texto2 = 'Hola, soy un texto de prueba';
let buscar2 = texto2.search('soy');
document.write('La palabra esta en la posicion: ', buscar2,'<br>');

//acortar texto
let texto3 = 'Hola, soy un texto de prueba';
let acortar = texto3.substr(0,4);
document.write('El texto acortado es: ', acortar,'<br>');

//quitar espacios
let texto4 = ' Hola, soy un texto de prueba ';
let quitarEspacios = texto4.trim();
document.write('El texto sin espacios es: ', quitarEspacios,'<br>');

//acortar espacios entre texto
let texto5 = '               Hola                ';
document.write(texto5, '<br>');
document.write(texto5.trimStart(), '<br>');
document.write(texto5.trimEnd(), '<br>');
document.write(texto5.trim(), '<br>');

//cortar  cantidad de caracteres
document.write(palabra.split('script'),'<br>');

