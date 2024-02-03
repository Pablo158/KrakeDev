calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
    
    
    
        valorSubtotal=calcularSubTotal(precioProducto,cantidad);
        mostrarTexto("lblSubtotal",valorSubtotal);


        valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
        mostrarTexto("lblDescuento",valorDescuento);


        valorIVA=calcularIva(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA",valorIVA);

        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        mostrarTexto("lblTotal",valorTotal);

   
        resumen="El Valor a pagar  es"+cantidad+" "+nombreProducto+" "+"con"+" "+valorDescuento+" de descuento : USD "+valorTotal;
        mostrarTexto("lblresumen",resumen);

}
borrar = function () {
    
        let producto=document.getElementById("txtProducto");
        let precio=document.getElementById("txtPrecio");
        let cantidad=document.getElementById("txtCantidad");
        let descuento=document.getElementById("txtPorcentajeDescuento");
        let subTotal=document.getElementById("lblSubtotal");
        let porcentajeDescuento=document.getElementById("lblDescuento");
        let iva=document.getElementById("lblValorIVA");
        let total=document.getElementById("lblTotal");
        let resumenTotal=document.getElementById("lblresumen");
        producto.value = "0";
        precio.value = "0";
        cantidad.value = "0";
        descuento.value = "0";
        subTotal.innerText = "0";
        porcentajeDescuento.innerText= "0.0";
        iva.innerText = "0.0";
        total.innerText= "0.0";
        resumenTotal.innerText= "0.0";
}
/* SI TODO FUNCIONA, HACER UN PUSH */