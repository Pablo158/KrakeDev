saludar = function(){
    // recuperar el valor de la caja de text
    let nombre = recuperarTexto("txtNombre")
    let apellido = recuperarTexto("txtApellido")

    let edad=recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura")

    let mensajes = "bienvenido"+nombre+" "+ apellido;
    mostarTexto("lbResultado", mensajes)
    mostarImagen("imgSaludo","./imagenes/hacer-venta.gif")
}

mostarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostarImagen = function (idComponente, rutaImagen){
    let componente = document.getElementById(idComponente)
    componente.src = rutaImagen;
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