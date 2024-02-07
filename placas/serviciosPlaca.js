validarEstructura = function (placa) {

    if(placa.length == 8 || placa.length == 7){
        if(esMayuscula(placa)){
            if(esGuion (placa)){
                if(esGuion (placa, placa.length == 8)){
                    return null;
                }else{
                    if(placa.length == 8){
                        return "Los ultimos 4 digitoa deben ser numericos"
                    }else{
                        return "los ultimos 3 digitos deben ser numericos"
                    }
                }
            }else{
                return "El caracter debe ser guion"
            }
        }else{
            return "Las primeras tres letras deben ser mayusculas"
        }
    }else{
        return"Lap placa debe obtener almenos 8 digitos"
    }
}
obtenerProvincia=function(placa){
    let primeraLetra=placa.charCodeAt(0);
    let provincia;

    if (primeraLetra === 65) {
        provincia = 'AZUAY';
    } else if (primeraLetra === 66) {
        provincia = 'BOLIVAR';
    } else if (primeraLetra === 85) {
        provincia = 'CAÑAR';
    } else if (primeraLetra === 67) {
        provincia = 'CARCHI';
    } else if (primeraLetra === 88) {
        provincia = 'COTOPAXI';
    }else if (primeraLetra === 72) {
        provincia = 'CHIMBORAZO';
    }else if (primeraLetra === 79) {
        provincia = 'EL ORO';
    }else if (primeraLetra === 69) {
        provincia = 'ESMERALDAS';
    }else if (primeraLetra === 87) {
        provincia = 'GALAPAGOS	';
    }else if (primeraLetra === 71) {
        provincia = 'GUAYAS';
    }else if (primeraLetra === 73) {
        provincia = 'IMBABURA';
    }else if (primeraLetra === 76) {
        provincia = 'LOJA';
    }else if (primeraLetra === 82) {
        provincia = 'Los Ríos';
    }else if (primeraLetra === 77) {
        provincia = 'Manabí';
    }else if (primeraLetra === 86) {
        provincia = 'Morona Santiago';
    }else if (primeraLetra === 78) {
        provincia = 'Napo';
    }else if (primeraLetra === 83) {
        provincia = 'Pastaza';
    }else if (primeraLetra === 80) {
        provincia = 'Pichincha';
    }else if (primeraLetra === 75) {
        provincia = 'Sucumbíos';
    }else if (primeraLetra === 81) {
        provincia = 'Orellana';
    }else if (primeraLetra === 84) {
        provincia = 'Tungurahua';
    }else if (primeraLetra === 90) {
        provincia = 'Zamora Chinchipe';
    }else if (primeraLetra === 89) {
        provincia = 'Santa Elena';
    } else{
        provincia=null;
    }
   return provincia;
    
}

obtenerDiaPicoYPlaca=function(placa,tieneOcho){
    let ultimoCaracter=placa.charCodeAt(7);
    let ultimoCaracter2=placa.charCodeAt(6);
    let noCircula;

    if(tieneOcho){
        if(ultimoCaracter===49 || ultimoCaracter===50){
            noCircula='Lunes';
       
           }else if(ultimoCaracter===51 || ultimoCaracter===52){
            noCircula='Martes';
           }else if(ultimoCaracter===53 || ultimoCaracter===54){
               noCircula='Miercoles';
               
           }else if(ultimoCaracter===55 || ultimoCaracter===56){
               noCircula='Jueves';
               
           }else if(ultimoCaracter===57 || ultimoCaracter===48){
               noCircula='Viernes';
       
           }else{
               noCircula=null;
           }
    }else{
        if(ultimoCaracter2===49 || ultimoCaracter2===50){
            noCircula='Lunes';
       
           }else if(ultimoCaracter2===51 || ultimoCaracter2===52){
            noCircula='Martes';
           }else if(ultimoCaracter2===53 || ultimoCaracter2===54){
               noCircula='Miercoles';
               
           }else if(ultimoCaracter2===55 || ultimoCaracter2===56){
               noCircula='Jueves';
               
           }else if(ultimoCaracter2===57 || ultimoCaracter2===48){
               noCircula='Viernes';
       
           }else{
               noCircula=null;
           }
    }

  

    return noCircula;
}

obtenerTipoVehiculo=function(placa){
    let segundaLetra=placa.charCodeAt(1);
    let tipo = null;

    if(segundaLetra===65 || segundaLetra===90 ){
     tipo='Vehiculo Comercial';
    }else if(segundaLetra===69){
        tipo='Vehiculo Gubernamental';

    }else if(segundaLetra===88){
        tipo='Vehiculo de uso Oficial';

    }else if(segundaLetra===83){
        tipo='Vehiculo del Gobierno Provincial';

    }else if(segundaLetra===77){
        tipo='Vehiculo Municipal';
        
    }else if(segundaLetra===66,67,68,70,71,72,73,74,75,76,78,79,80,81,82,84,85,86,87,89){
        tipo='Vehiculo Particular';
      
    }else{
        tipo=null;
    }
    return tipo;

}
       