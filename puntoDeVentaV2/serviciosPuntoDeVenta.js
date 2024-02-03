calcularValorDescuento = function (monto, porcentajeDescuento){

    let totalIva = (monto*porcentajeDescuento)/100
    tottiVA = parseFloat (totalIva)
    return tottiVA;
}
calcularIva = function(monto,cantidad,precio){

    if(cantidad>=3 & cantidad<=5){
    let montoResultado = (monto*0.3)/100;
    let total = parseFloat(montoResultado)
    return total;
    }else if(cantidamontod>=6 & monto<=11){
    let montoResultado = (monto*0.4)/100;
    let total = parseFloat(montoResultado)
    return total;
    }else if(cantidad>=12){
        let montoResultado = (monto*0.4)/100;
        let total = parseFloat(montoResultado)
        return total;
    }else{
        let subtotal=precio*cantidad;
        return subtotal
    }
}
calcularSubTotal = function(precio,cantidad){
    calcularSubtotal=function(precio,cantidad){
        let subtotal=precio*cantidad;
        return subtotal

    
    }
}
calcularTotal=function(subtotal,iva){
    //let totalC = (subTotal-descuento);
    //let TotalIva = (iva/100)*totalC;
    //return TotalIva;

    let valortotal=subtotal+iva;
    return valortotal
        
}

esProductoValido = function () {
    let nombreProducto;
    let cantidad;
    let precio;
    let resultado;
    let resultadoFormato;
    let existEror = false
        nombreProducto = recuperarFloat("txtNota1");
        if(nombreProducto===" " && cantidad===" " && precio===" "){
            mostrarTexto("txtProducto","Debe ingresar el compo obligatorio")
            existEror = true;
        }else{
            mostrarTexto("txtProducto","")
        }


    }
esMaximoCaracteres = function(){
    if(nombreProducto.length <10){
        existEror = true;
        mostrarTexto("txtProducto","Debe ingresar menos de 10 digitos")
    } else{
        mostrarTexto("txtProducto","")
    }
}
esMaximoCantidaNumerica = function(){
    if (cantidad < 0 || cantidad > 100){
    mostrarTexto("txtProducto","Debe ingresar menos de 10 digitos")
    }else{
        mostrarTexto("txtProducto","")
    }

}
