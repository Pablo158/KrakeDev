recuperarTexto=function(idComponente){
   let componente;
   let valorIngresado;
   componente=document.getElementById(idComponente);
   valorIngresado=componente.value;
   return valorIngresado;
}
mostarImagen = function (idComponente, rutaImagen){
   let componente = document.getElementById(idComponente)
   componente.src = rutaImagen;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }


 mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
