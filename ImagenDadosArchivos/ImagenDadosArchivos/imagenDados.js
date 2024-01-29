let puntos = 0;
let lanzamientos = 5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamiento(resultado)
    limpiar(resultado);
   
}

modificarPuntos = function(numero){
    puntos = numero+puntos;

    if (puntos >= 20){
        cambiarTexto("idPuntajemaximo", "Ganaste");
    }
    cambiarTexto("lblPuntos", puntos)

}
modificarLanzamiento = function(){
    lanzamientos = lanzamientos-1;
    cambiarTexto("IdLanzamientos", lanzamientos)

    if (lanzamientos == 0){
        cambiarTexto("idIntentos","Game over");
    }

    limpiar = function(){
         if (puntos >= 20 && lanzamientos <= 0) {
            puntos = 0;
            lanzamientos=5;
            cambiarTexto ("lblPuntos",puntos)
            cambiarTexto ("IdLanzamientos",lanzamientos)
            cambiarImagen ("dado1","")
        }   
        
    }
}
//recibe el numero que quiere mostrar
//NO RETORNA NADA
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("dado1","dados1.png");
    }else if (numero == 2){
        cambiarImagen("dado1","dados2.png");
    } else if (numero == 3){
        cambiarImagen("dado1","dados3.png");
    }else if (numero == 4){
        cambiarImagen("dado1","dados4.png");
    }else if (numero == 5){
        cambiarImagen("dado1","dados5.png");
    }else if (numero == 6){
        cambiarImagen("dado1","dados6.png");
}  
}     




lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
