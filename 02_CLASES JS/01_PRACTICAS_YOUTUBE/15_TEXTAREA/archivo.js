
let area = document.getElementById('comentarios');
area.style.resize = 'none';

function comentar(){
    if(document.getElementById('comentarios').value.length > 100){
        swal('Comentario muy largo', 'El comentario no puede tener más de 100 caracteres', 'error');
    }else{
        swal('Comentario enviado', 'Gracias por tu comentario', 'success');
    }
}
