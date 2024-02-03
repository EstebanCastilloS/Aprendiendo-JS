
let contol = 0;
let contrasena = '1234';    

function verificarContrasena(){
    let contrasenaIngresada = document.getElementById('clave').value;
    if(contrasenaIngresada != contrasena || contrasenaIngresada == ''){
        alert('Contraseña incorrecta o vacía, Intente de nuevo');
        contol++;
        if(contol >= 3){
            alert('Ha superado el número de intentos permitidos');
            window.close();
        }
    }else{        
        window.open('https://www.google.com');
    }
}