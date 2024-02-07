validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        
        cambiarTexto("lblValidar","ESTRUCURA VALIDA");
        let provincia = obtenerProvincia(placa);

        if (provincia !== null) {
            
            cambiarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            
            cambiarTexto("lblProvincia", "Provincia incorrecta");
        }

        let tipo=obtenerTipoVehiculo(placa);

        if(tipo !== null){
            cambiarTexto("lblVehiculo", "Tipo de Vehiculo: ");
        }else{
            cambiarTexto("lblVehiculo", "Vehiculo Incorrecto");
        }
        let dia=obtenerDiaPicoYPlaca(placa,placa.length===8);

        if(dia!==null){
            cambiarTexto("lblDia", "No circula: ");
        }else{
            cambiarTexto("lblDia","Ultimo digito incorrecto");
        }

    }else{
        cambiarTexto("lblValidar","ESTRUCTURA INCORRECTA");
        cambiarTexto("lblErrores",erroresEstructura);
        
    }
}