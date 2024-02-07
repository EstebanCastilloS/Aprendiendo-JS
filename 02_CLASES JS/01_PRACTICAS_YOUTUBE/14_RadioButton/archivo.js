function validar(){
    if(document.getElementById('radio1').checked){
        swal('Horario de am a 12m')
    }
    if(document.getElementById('radio2').checked){
        swal('Horario de 12m a 6pm')
    }
    if(document.getElementById('radio3').checked){
        swal('Horario de 6pm a 12am')
    }
}
