validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        
        cambiarTexto("lblValidar","ESTRUCURA VALIDA");
        //console.log(cambiarTexto("lblValidar","Corre bien"))
        let provincia = obtenerProvincia(placa);

        if (provincia !== null) {
            
            cambiarTexto("lblProvincia", "Provincia: " + provincia);
            //console.log(cambiarTexto("lblProvincia","Corre bien"+provincia))

        } else {
            
            cambiarTexto("lblProvincia", "Provincia incorrecta");
            //console.log(cambiarTexto("lblProvincia","Corre bien"))
        }

        let tipo=obtenerTipoVehiculo(placa);

        if(tipo !== null){
            cambiarTexto("lblVehiculo", "Tipo de Vehiculo: "+tipo);
           // console.log(cambiarTexto("lblVehiculo","tipo vehiculo "))

        }else{
            cambiarTexto("lblVehiculo", "Vehiculo Incorrecto");
           // console.log(cambiarTexto("lblVehiculo"," vehiculo malo"))
        }
        let dia=obtenerDiaPicoYPlaca(placa,placa.length===8);

        if(dia!==null){
            cambiarTexto("lblDia", "No circula: "+dia);
            //console.log(cambiarTexto("lblDia"," no circula"))

        }else{
            cambiarTexto("lblDia","Ultimo digito incorrecto");
            //console.log(cambiarTexto("lblDia"," ultimo digito Incorrecto"))

        }

    }else{
        cambiarTexto("lblValidar","ESTRUCTURA INCORRECTA");
        //console.log(cambiarTexto("lblValidar"," STRUCTURA INCORRECTA"))

        cambiarTexto("lblErrores",erroresEstructura);
        //console.log(cambiarTexto("lblErrores",erroresEstructura))

        
    }
}