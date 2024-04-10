// Prueba String

// ----------------Información básica y concatenación de cadenas----------------

let hello = "Hello";
console.log(hello);
let world = 'world';
console.log(world);
let helloW = `Hello World`;
console.log(helloW);

// Las cadenas pueden crearse a partir de otros tipos utilizando la función String().

let intString = String(32);
console.log(intString);
let booleanString = String(true);
console.log(booleanString);
let nullString = String(null);
console.log(nullString);

// O bien, toString() puede utilizarse para convertir Números, Booleanos u Objetos en Cadenas.

let intString_1 = (5232).toString(); // "5232"
console.log(intString_1);
let booleanString_1 = (false).toString(); // "false"
console.log(booleanString_1);
let objString_1 = ({}).toString(); // "[object Object]"
console.log(objString_1);

//También se pueden crear cadenas utilizando el método String.fromCharCode.

let prueba = String.fromCharCode(104,101,108,108,111) //"hello"
console.log(prueba);

// Crear un objeto String usando la palabra clave new está permitido, 
// pero no es recomendable ya que se comporta como Objetos a diferencia 
// de las cadenas primitivas.

let objectString = new String("Yes, I am a String object");
console.log(typeof objectString);//"object"
console.log(typeof objectString.valueOf());//"string"

//-------------------- Reverse String usando el método split(), reverse() y join().--------------------

// La forma más "popular" de invertir una cadena en JavaScript es el siguiente 
// fragmento de código, que es bastante común:

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('string')); 

// Sin embargo, esto sólo funcionará mientras la cadena que se está invirtiendo 
// no contenga pares sustitutos. Los símbolos astrales, es decir, los caracteres 
// fuera del plano multilingüe básico, pueden estar representados por dos unidades 
// de código, y harán que esta técnica ingenua produzca resultados erróneos. Además, 
// los caracteres con marcas de combinación (por ejemplo, diéresis) aparecerán en el 
// carácter lógico "siguiente" en lugar del original con el que se combinó. 

console.log(reverseString('?????.'));
console.log('?????.'.split('').reverse().join('') );


function reverseString_1(str) {
    return [...String(str)].reverse().join('');
}

console.log(reverseString_1('?????.')); 
console.log(reverseString_1([1, 2, 3])); 

function reverse(string) {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) 
    {
        strRev += string[i];
    }
    return strRev;
}

console.log(reverse("zebra")); 


// ---------------------Comparing Strings Lexicographically---------------------

// Para comparar cadenas alfabéticamente, utilice localeCompare(). Esto devuelve un valor negativo 
// si la cadena de referencia está lexicográficamente (alfabéticamente) antes que la cadena comparada 
// (el parámetro), un valor positivo si viene después, y un valor de 0 si son iguales.

let a = "hello";
let b = "world";
console.log(a.localeCompare(b));

// Los operadores > y < también pueden utilizarse para comparar cadenas lexicográficamente, 
// pero no pueden devolver un valor cero (esto puede comprobarse con el operador de igualdad ==). 
// Como resultado, una forma de la función localeCompare() puede escribirse así:

function strcmp(a, b) {
    if(a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }

    return -1;
}

console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); // 0
console.log(strcmp("world", "hello")); // 1

// Esto es especialmente útil cuando se utiliza una función de ordenación que compara 
// basándose en el signo del valor devuelto (como sort).

var arr = ["bananas", "cranberries", "apples"];
arr.sort(function(a, b) {
 return a.localeCompare(b);
});
console.log(arr); // [ "apples", "bananas", "cranberries" ]

// ---------------------Carácter de acceso en el índice de la cadena---------------------

//Utilice charAt() para obtener un carácter en el índice especificado de la cadena.

var string = "Hello, World!";
console.log( string.charAt(4) ); // "o"

//Para obtener el código del carácter en un índice especificado, utilice charCodeAt()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

var string = "Hello, World!";
console.log( string.charCodeAt(4) ); // 111

// ---------------------Escapar de las comillas---------------------

// Si su cadena está encerrada entre comillas simples, debe escapar las comillas 
// literales interiores con la barra invertida \

