let a, b, sum, res, mul, div, resid, poten;

a = parseInt(prompt("Ingrese el primer número"));
b = parseInt(prompt("Ingrese el segundo número"));

//suma
sum = a + b;

//resta
res = a - b;

//multiplicación
mul = a * b;

//división
div = a / b;

//residuo
resid = a % b;

//potencia
poten = a ** b;

document.write("La suma de " + a + " + " + b + " es: " + sum + "<br>");
document.write("La resta de " + a + " - " + b + " es: " + res + "<br>");
document.write("La multiplicación de " + a + " * " + b + " es: " + mul + "<br>");
document.write("La división de " + a + " / " + b + " es: " + div + "<br>");
document.write("El residuo de " + a + " % " + b + " es: " + resid + "<br>");
document.write("La potencia de " + a + " ^ " + b + " es: " + poten + "<br>");


let c = 1;

//aumentar en 1
c++;

//aumentar valor en 5
c += 5;

//disminuir en 1
c--;

//disminuir valor en 2
c -= 2;

document.write("El valor de c es: " + c + "<br>");


let valor1, valor2;

valor1 = 20;
valor2 = 10;

//comparar si valor1 es mayor que valor2
document.write("El valor1 es mayor que valor2: " + (valor1 > valor2) + "<br>");

//comparar si valor1 es menor que valor2
document.write("El valor1 es menor que valor2: " + (valor1 < valor2) + "<br>");

//comparar si valor1 es mayor o igual que valor2
document.write("El valor1 es mayor o igual que valor2: " + (valor1 >= valor2) + "<br>");

//comparar si valor1 es menor o igual que valor2
document.write("El valor1 es menor o igual que valor2: " + (valor1 <= valor2) + "<br>");

//comparar si valor1 es igual que valor2
document.write("El valor1 es igual que valor2: " + (valor1 == valor2) + "<br>");

//comparar si valor1 es diferente que valor2
document.write("El valor1 es diferente que valor2: " + (valor1 != valor2) + "<br>");

//comparar si valor1 es igual que valor2 y del mismo tipo
document.write("El valor1 es igual que valor2 y del mismo tipo: " + (valor1 === valor2) + "<br>");

//comparar si valor1 es diferente que valor2 o de diferente tipo
document.write("El valor1 es diferente que valor2 o de diferente tipo: " + (valor1 !== valor2) + "<br>");


