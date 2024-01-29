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

    console.log(promedio)
   mostrarTexto("lblNumero",promedio)
}