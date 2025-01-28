/*
//Trae un solo elemento
document.getElementById('app-id')
document.querySelector('#app-title')
document.querySelector('p')

//Trae todos los elementos
document.getElementsByClassName('menus-items')
document.getElementsByTagName('p')
document.querySelectorAll('.menu-items')

//Obteniendo los elementos de parent
const parent = document.getElementById("parent");
console.log(parent);

//obtener todos los hijos
const children = parent.children;
console.log(children);

//obtener primer hijo
const firstChild = parent.firstElementChild;
console.log(firstChild);

//Obtener el útimo hijo
const lastChild = parent.lastElementChild;
console.log(lastChild);

//Hermano del padre
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

//
const nextSiibling = parent.nextElementSibling;
console.log(nextSiibling);

*/

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado