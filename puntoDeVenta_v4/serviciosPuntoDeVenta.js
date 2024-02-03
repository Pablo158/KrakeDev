calcularValorDescuento = function (monto, porcentajeDescuento){
    let valorDescuento = (monto*porcentajeDescuento)/100;
    return valorDescuento
}
calcularIVA=function(monto){
    let iva=(monto*12)/100;
    let totalIva=iva.toFixed(2);
    let total=parseFloat(totalIva);
    return total
    }
calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal
    }
calcularTotal=function(subtotal,descuento,iva){
    let valortotal=subtotal-descuento+iva;
    return valortotal
    }

calcularDescuentoPorVolumen=function(subtotal,cantidad){
        let descuento;
    
        if(cantidad<3){
            descuento=0;
        }else if (cantidad >= 3 && cantidad <= 5) {
            descuento = 0.03 * subtotal;
        } else if (cantidad >= 6 && cantidad <= 11) {
            descuento = 0.04 * subtotal;
        } else if (cantidad >= 12) {
            descuento = 0.05 * subtotal;
        }
    
        return descuento;
    
    }