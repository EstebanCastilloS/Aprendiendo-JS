
function f_focus(){
    document.getElementById('nombre').value = '';

}

function f_blur(){
    if(document.getElementById('nombre').value == ''){
        alert('El campo nombre no puede estar vacío');
    }
}
