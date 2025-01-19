
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

var text = 'L\'albero means tree in Italian';
console.log( text );  "L'albero means tree in Italian"

//---------------------Contador de palabras---------------------

//https://jsfiddle.net/RokoCB/5nfay7d1/206/

// function wordCount( val )
// {
//     let wom = val.match(/\S+/g);
    
//     return {
//     charactersNoSpaces : val.replace(/\s+/g, '').length,
//     characters : val.length,
//     words : wom ? wom.length : 0,
//     lines : val.split(/\r*\n/).length
//     };
// }
   
// // Use like:
// wordCount( someMultilineText ).words; // (Number of words)

// var textarea = document.getElementById("text");
// var result   = document.getElementById("result");

// textarea.addEventListener("input", function(){
//   var v = wordCount( this.value );
//   result.innerHTML = (
//       "<br>Characters (no spaces):  "+ v.charactersNoSpaces +
//       "<br>Characters (and spaces): "+ v.characters +
//       "<br>Words: "+ v.words +
//       "<br>Lines: "+ v.lines
//   );
// }, false);

// ---------------------Trim whitespace--------------------

//Para recortar los espacios en blanco de los bordes de una cadena, utilice String.prototype.trim:

console.log("      some whitespaced string ".trim()); 
// "some whitespaced string"

// Muchos motores JavaScript, pero no Internet Explorer, han implementado métodos trimLeft 
// y trimRight no estándar. Existe una propuesta, actualmente en la fase 1 del proceso, 
// para estandarizar los métodos trimStart y trimEnd, con los alias trimLeft y trimRight 
// por motivos de compatibilidad.

// Stage 1 proposal
console.log("      this is me     ".trimStart()); 
// "this is me "
console.log("      this is me     ".trimEnd()); 
// " this is me"


// Non-standard methods, but currently implemented by most engines
console.log("      this is me     ".trimLeft()); // "this is me "
console.log("      this is me     ".trimRight()); // " this is me"

// ---------------------Splitting a string into an array--------------------

var s = "one, two, three, four, five"
console.log(s.split(", ")); 
// ["one", "two", "three", "four", "five"]

//Utiliza el método array .join para volver a una cadena:

console.log(s.split(", ").join("--")); 
// "one--two--three--four--five"

// ---------------------Detecting a string--------------------

//Para detectar si un parámetro es una cadena primitiva, utilice typeof:

var aString = "my string";
var anInt = 5;
var anObj = {};
console.log(typeof aString === "string"); // true
console.log(typeof anInt === "string"); // false
console.log(typeof anObj === "string"); // false

// Si alguna vez tienes un objeto String, mediante new String("somestr"), 
// entonces lo anterior no funcionará. En este caso, podemos utilizar instanceof:

var aStringObj = new String("my string");
aStringObj instanceof String; // true

// Para cubrir ambos casos, podemos escribir una sencilla función de ayuda: 

var isString = function(value) {
    return typeof value === "string" || value instanceof String;
};

var aString = "Primitive String";
var aStringObj = new String("String Object");
console.log(isString(aString)); // true
console.log(isString(aStringObj)); // true
console.log(isString({})); // false
console.log(isString(5)); // false

var pString = "Primitive String";
var oString = new String("Object Form of String");
console.log(Object.prototype.toString.call(pString));//"[object String]"
console.log(Object.prototype.toString.call(oString));//"[object String]"

// ---------------------String Find and Replace Functions--------------------

// indexOf() devuelve el índice de la primera aparición de searchString en la cadena. 
// Si no se encuentra searchString, se devuelve -1.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log( string.indexOf("foo") ); // -1

// Del mismo modo, lastIndexOf() devolverá el índice de la última aparición de la cadena de búsqueda
//  o -1 si no se encuentra.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

var string = "Hello, World!";
console.log( string.lastIndexOf("o") ); // 8
console.log( string.lastIndexOf("foo") ); // -1

// includes() devolverá un booleano que indica si searchString existe en la cadena, 
// empezando por el inicio del índice (por defecto es 0). Esto es mejor que indexOf() 
// si sólo necesita comprobar la existencia de una subcadena.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

var string = "Hello, World!";
console.log( string.includes("Hello") ); // true
console.log( string.includes("foo") ); // false

// replace() devolverá una cadena que tiene todas las ocurrencias de subcadenas que coinciden 
// con la regexp RegExp o la subcadena de cadena con un reemplazo de cadena o el valor devuelto 
// de replaceFunction. 

//Tenga en cuenta que esto no modifica la cadena en su lugar, sino que devuelve la cadena con los reemplazos.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

var string = "Hello, World!";

string = string.replace( "Hello", "Bye" );
console.log( string ); // "Bye, World!"

string = string.replace( /W.{3}d/g, "Universe" );
console.log( string ); // "Bye, Universe!"

// replaceFunction puede utilizarse para sustituciones condicionales de objetos de expresiones regulares 
// (es decir, con el uso de regexp). Los parámetros están en el orden siguiente: 

// match: la subcadena que coincide con toda la expresión regularg 
// g1, g2, g3, ...: los grupos coincidentes en la expresión regular 
// offset: el desplazamiento de la coincidencia en toda la cadena 
// cadena: la cadena completa

//Tenga en cuenta que todos los parámetros son opcionales.

var string = "heLlo, woRlD!";

string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
});
console.log( string ); // "Hello, World!"

//El método .indexOf devuelve el índice de una subcadena dentro de otra cadena 
//(si existe, o -1 en caso contrario)

console.log('Hellow World'.indexOf('Wor')); 

// .indexOf también acepta un argumento numérico adicional que indica en qué índice 
// debe empezar a buscar la función

console.log("harr dee harr dee harr".indexOf("dee", 10)); // 14

//---------------------: String to Upper Case--------------------

console.log('qwerty'.toUpperCase()); // 'QWERTY'

//---------------------: String to Lower Case--------------------

console.log('QWERTY'.toLowerCase()); // 'qwerty'

//---------------------:  Repeat a String--------------------

//El método repeat() construye y devuelve una nueva cadena que contiene 
//el número especificado de copias de la cadena en la que se llama.

//https://262.ecma-international.org/6.0/#sec-string.prototype.repeat

//convertir string a entero javascript

console.log(typeof(num))
console.log("abc".repeat(3)); // Returns "abcabcabc"
console.log("abc".repeat(0)); // Returns ""
// console.log("abc".repeat(-1)); // Throws a RangeError





