//html string -> cadena de texto
//create elements

/**
 * innerHTML
 * insertAdjacentHTML -> se puede escoger en donde se puede inyectar este html
 */

const contentArea = document.getElementById("contentArea");
console.log(contentArea)

contentArea.innerHTML ="<p>Este es un nuevo párrafo ahora</>"
contentArea.insertAdjacentHTML("beforeend","<p>Este es otro nuevo párrafo con insert</>");

/**
 * innerHTML
 * 
 */

const listArea = document.getElementById("listArea");
console.log(listArea);
listArea.innerHTML += "<li>item 5</li>";
listArea.insertAdjacentHTML("beforeend","<li>item 6</li>"); // sin renderizar la pag

