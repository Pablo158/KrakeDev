mostarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostarImagen = function (idComponente, rutaImagen){
    let componente = document.getElementById(idComponente)
    componente.src = rutaImagen;
}
//Modificar caja de texto
mostrarTextoEnCaja = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    //Value limpia la caj de texto nombre
    componente.value = mensaje;
}


recuperarTexto = function (idComponente){
    let componente;
    let valorIngresado;

    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;


}

recuperarInt = function (idComponente){
   let valorCaja = recuperarTexto(idComponente)
   let valorEntero= parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function (idComponente){
    let valorCaja = recuperarTexto(idComponente)
    let valorFloat= parseFloat(valorCaja);
    return valorFloat;
 }