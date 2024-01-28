calcularValorDescuento = function (monto, porcentajeDescuento){

    let totalIva = (monto*porcentajeDescuento)/100
    tottiVA = parseFloat (totalIva)
    return tottiVA;


}
calcularIva = function(monto){

    let montoResultado = (monto*12)/100;
    let total = parseFloat(montoResultado)
    return total;

}

calcularSubTotal = function(precio,cantidad){

    let total = precio*cantidad;
    return total;

}
calcularTotal=function(subtotal,descuento,iva){
    //let totalC = (subTotal-descuento);
    //let TotalIva = (iva/100)*totalC;
    //return TotalIva;
    let valortotal=subtotal-descuento+iva;
    return valortotal
        
}
