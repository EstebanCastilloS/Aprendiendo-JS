
/**
 * Requirimiento del reto:
 * 
 * 1. El usuario debe poder ingresar su usuari y contraseña
 * 2. El sistema debe ser capaz de validar si el usuario y la contraseña ingresado por el usuario
 * existe en la base de datos.
 * 3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostar
 * el timeline del usuario.
 * 4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar mensaje de error y 
 * no mostar ningún timeline
 */


const userDatabase =[
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];


const userTimeline = [
    {
        username: "Estefanny",
        timeline: "Me encanta Javascritp",
    },
    {
        username: "Esteban",
        timeline: "Me encanta Laravel",
    },
    {
        username: "Mariana",
        timeline: "Me encanta comer",
    },
    {
        username: "Elias",
        timeline: "Me encanta las nenas",
    },
];

// const username =  prompt("¿Cuál es tu usuario");
// const password =  prompt("¿Cuál es tu contraseña");
// const username =  "Esteban";
// const password =  "123";
// const username1 =  "caro";
// const password1 =  "123";
const username2 =  "mariana";
const password2 =  "789";

function usuarioExistente(username, password){
    for (let i = 0; i < userDatabase.length; i++) {
        
        if(userDatabase[i].username === username && userDatabase[i].password === password){

            // console.log("Es correcto");
            return true;
        }        
    }
    return false;
}

// usuarioExistente(username, password);
// usuarioExistente(username1, password1);
// usuarioExistente(username2, password2);

function signIn(username, password) {
    if(usuarioExistente(username, password)){
        console.log(`Bienvenido a tu cuenta ${username} -> ${userTimeline}`)
    }else{
        console.log("Upsss, Usuario o contraseña inorrecta")
    }
}

signIn(username2,password2);