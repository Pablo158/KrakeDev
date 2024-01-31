calcularPromedioNotas = function (){
   
    let nota1Recuperada1=recuperarFloat("nota1");
    let nota2Recuperada2=recuperarFloat("nota2");
    let nota3Recuperada3=recuperarFloat("nota3");

    console.log(nota1Recuperada1);
    console.log(nota2Recuperada2);
    console.log(nota3Recuperada3);

   // invocar a la funcion calcular Promediio
   let promedio=calcularPromedio(nota1Recuperada1,nota2Recuperada2,nota3Recuperada3);
   //valorSubtotal=calcularSubTotal(precioProducto,cantidad);


   if( promedio <5 &&  promedio >0){
   mostrarTexto("lblNumero",promedio+" Usted esta reprobado");
   mostarImagen("idImg","./imagenes/reprobado.gif")

    }else if(promedio >=5 && promedio <= 8){
        mostrarTexto("lblNumero", promedio+"Buen trabajo")
        mostarImagen("idImg","./imagenes/buentrabajo.gif")
    }else if (promedio > 8 && promedio <=10){
        mostrarTexto("lblNumero",promedio+"Excelente")
        mostarImagen("idImg","./imagenes/excelente.gif")
    }else{
        mostrarTexto("lblNumero","Dados incorrectos")
        mostarImagen("idImg","./imagenes/error.gif")

    }
    //console.log(promedio)
}   