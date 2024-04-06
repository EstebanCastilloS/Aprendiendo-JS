//SOLICITUDES HTTP

//fetch API
//La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes 
//del canal HTTP, como peticiones y respuestas.
//También provee un método global fetch() que proporciona una forma fácil y lógica de
//obtener recursos de forma asíncrona por la red.
const baseURL = 'https://jsonplaceholder.typicode.com/posts'
// const baseURL = 'https://rickandmortyapi.com/api/character/126'
// fetch(baseURL)
//     .then(response => response.json())
//     .then(data => console.log(data)) 


//Async Await



// const obtenerPersonaje = async () => {
//     try {
//         const response = await fetch(baseURL);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// obtenerPersonaje();

//Axios
//Axios es una librería que nos permite hacer solicitudes HTTP desde el navegador
//y también desde Node.js.
//Axios nos permite hacer solicitudes HTTP a servidores RESTful y GraphQL.
//Axios nos permite hacer solicitudes HTTP asíncronas.
//Axios nos permite hacer solicitudes HTTP con promesas.
//Axios nos permite hacer solicitudes HTTP con el método fetch.

// const baseURL1 = '';
// const endpoint = '';
// const url = `${baseURL1}${endpoint}`;



// Datos a enviar
const datos = {
    title: 'Titulo de la publicación ESTEBAN CASTILLO',
    body: 'Contenido de la publicación el cuerpo del contenido de ESTEBAN CASTILLO',
    userId: 1
}
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
}

fetch(baseURL, options)
    .then(response => response.json())
    .then(data => console.log(data)) 