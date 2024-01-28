//Invocamos la funcion
jugar = function (){
    let ramdon = lanzarDados();
    let msm = mensaje();
    let msm2 = mensaje2();
    //llamamos de utilitarios.js
    cambiarTexto("lblNumero",ramdon)


    if (ramdon > 3 ){
        cambiarTexto("lblMensaje",msm)

    }else{
        cambiarTexto("lblMensaje",msm2)

    }
}

//Crear funcion lanzar dado
//no recibe parametros
//retorna un numero aleatorio del 1 al 10

lanzarDados = function (){
    let numeroEntero;
    let aleatorio = Math.random(); // slrstorio de 0 y 1
    let numeroMultiplicado = aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    console.log(numeroEntero)

    let valorAlt = numeroEntero+1;
    return valorAlt;
}

mensaje = function (){
    let mensajes = "Es mayor a 3"
     return mensajes
}
mensaje2 = function (){
    let mensajes1 = "Es menor a 3"
     return mensajes1
}