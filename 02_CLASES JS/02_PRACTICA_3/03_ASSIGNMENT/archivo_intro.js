// JavaScript Assignment Operators

// Operator	   Example	   Same As
// =	       x = y	   x = y
// +=	       x += y	   x = x + y
// -=	       x -= y	   x = x - y
// *=	       x *= y	   x = x * y
// /=	       x /= y	   x = x / y
// %=	       x %= y	   x = x % y
// **=	       x **= y	   x = x ** y

// ---------------------------------------------------------------

//The = Operator
//El operador de asignación simple asigna un valor a una variable.

let x = 10;
console.log(x);

let y = 50
let x1 = 10 + y;
console.log(x1);

// The += Operator
// El operador de asignación de suma añade un valor a una variable.

let x0 = 10;
x0 += 5;
console.log(x0);

let text = "Hello";
text += " World";
console.log(text);

// The -= Operator
// El Operador de Asignación Sustracción sustrae un valor de una variable.

let x2 = 10;
x2 -= 5;
console.log(x2);

// The *= Operator
// El Operador de Asignación Multiplicación multiplica una variable.

let x3 = 10;
x3 *= 5;
console.log(x3);

// The **= Operator
// El operador de asignación de exponenciación eleva una variable a la potencia del operando.

let x4 = 10;
x4 **= 5;
console.log(x4);

// The /= Operator
// El operador de asignación de división divide una variable.

let x5 = 10;
x5 /= 5;
console.log(x5);

// The %= Operator
// El operador de asignación de resto asigna un resto a una variable.

let x6 = 10;
x6 %= 5;
console.log(x6);

// ---------------------------------------------------------------

// Shift Assignment Operators
// Operator	    Example	   Same As
// <<=	        x <<= y	   x = x << y
// >>=	        x >>= y	   x = x >> y
// >>>=	        x >>>= y   x = x >>> y

// The <<= Operator
// El operador de asignación de desplazamiento a la izquierda desplaza a la izquierda una variable.

let x7 = -100;
x7 <<= 5;
console.log(x7);


// The >>= Operator
// El operador de asignación de desplazamiento a la derecha desplaza a la derecha una variable (con signo).

let x8 = -100;
x8 >>= 5;
console.log(x8);

// The >>>= Operator
// El operador de asignación de desplazamiento a la derecha sin signo desplaza a la derecha 
// una variable (sin signo).

let x9 = -100;
x9 >>>= 5;
console.log(x9);

//---------------------------------------------------------------

// Bitwise Assignment Operators
// Operator	    Example	   Same As
// &=	        x &= y	   x = x & y
// ^=	        x ^= y	   x = x ^ y
// |=	        x |= y	   x = x | y

// The &= Operator
// El operador de asignación bit a bit AND realiza una operación bit a bit AND 
// en dos operandos y asigna el resultado a la variable.

let x10 = 100;
x10 &= 5;
console.log(x10);


// The |= Operator
// El operador de asignación Bitwise OR realiza una operación bitwise OR sobre dos operandos 
// y asigna el resultado a la variable.

let x11 = 10;
x11 |= 5;
console.log(x11);

// The ^= Operator
// El operador de asignación bit a bit XOR realiza una operación bit a bit XOR 
// en dos operandos y asigna el resultado a la variable.

let x12 = 10;
x12 ^= 5;
console.log(x12);


// ---------------------------------------------------------------

// Logical Assignment Operators
// Operator	  Example	  Same As
// &&=	      x &&= y	  x = x && (x = y)
// ||=	      x ||= y	  x = x || (x = y)
// ??=	      x ??= y	  x = x ?? (x = y)

// The &&= Operator
// El operador lógico de asignación AND se utiliza entre dos valores.
// Si el primer valor es verdadero, se asigna el segundo valor.

let x13 = 10;
x13 &&= 5;
console.log(x13);

// The ||= Operator
// El operador lógico de asignación OR se utiliza entre dos valores.
// Si el primer valor es falso, se asigna el segundo valor.

let x14 = 10;
x14 ||= 5;
console.log(x14);

// The ??= Operator
// El operador de asignación de coalescencia nulo se utiliza entre dos valores.
// Si el primer valor es indefinido o nulo, se asigna el segundo valor.

let x15;
x15 ??= 5;
console.log(x15);


// ---------------------------------------------------------------