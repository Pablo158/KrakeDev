presentarCadena =function(){

   // let mensaje = recuperarTexto("idtxtx")
   // recorrerCadena(mensaje)

    let mensaje2 = recuperarTexto("idtxtx");
    recorrerCadenaInversa(mensaje2);
    
}


recorrerCadena = function(cadena){

    for (let longitud = 0; longitud <cadena.length; longitud++) {
            let cantCadena = cadena.charAt(longitud);
            console.log("La longitud es: "+longitud+" "+cantCadena)

    }}

recorrerCadenaInversa= function (cad){
 
        for (let i = cad.length - 1; i >= 0; i--) {

        let cantCadena = cad.charAt(i);
        console.log("La longitud es: "+i+" "+cantCadena)
    }}