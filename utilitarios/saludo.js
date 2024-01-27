saludar = function(){
    // recuperar el valor de la caja de text
    let nombre = recuperarTexto("txtNombre")
    let apellido = recuperarTexto("txtApellido")

    let edad=recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura")

    let mensajes = "bienvenido"+nombre+" "+ apellido;
    mostarTexto("lbResultado", mensajes)
    mostarImagen("imgSaludo","./imagenes/hacer-venta.gif")
    mostrarTextoEnCaja("txtNombre", "");
}

