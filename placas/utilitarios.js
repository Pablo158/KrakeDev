
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
cambiarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    //Value limpia la caj de texto nombre
    componente.value = mensaje;
}