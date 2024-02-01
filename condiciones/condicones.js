//calcularTasaIntereses = function (ingresoAnual){
calcularTasaIntereses = function (){
    let ingresoAnual;

    if(ingresoAnual < 300.000){
        console.log("La tasa de interes es 16%")
    }else if (ingresoAnual >=300.000 && ingresoAnual < 500.000  ){
        console.log("La tasa de interes es 15%")
    }else if(ingresoAnual >=500.000 && ingresoAnual < 1000.000){
        console.log("La tasa de interes es 14%")
    }else if(ingresoAnual >=1000.000 && ingresoAnual < 2000.000){
        console.log("La tasa de interes es 13%")
    }else{
        console.log("la tasa es del 12%")
}
}

//calcularTasaIntereses(2000.000);

calcularCapacidadPago = function (){

    let ingresos =500.00;
    let egresos =200.00 ;
    let edad;

    if(edad >50){
        let resulTotal = ingresos-egresos;
        let totalPago = resulTotal*0.30;
        console.log("Su valor a pagar es"+totalPago)
    }else{
        let resulTotal = ingresos-egresos;
        let totalPago = resulTotal*0.40;
        console.log("Su valor a pagar es"+totalPago)
    }
}

calcularDescuento= function(){
    let precio;
    let cantida;

    if(cantida < 3){
        let total = precio+precio;
        console.log("Usted no recibe descuento")
    }else if(cantida>=5){
        let totalDescuento = precio *0.10;
        console.log("El total es"+totalDescuento);
    }else if(cantida>=3 && cantida <=5){
        let totalDescuento = precio *0.2;
        console.log("El total es"+totalDescuento);
    } else if(cantida>=6 && cantida <= 11 ){
        let totalDescuento = precio *0.3;
        console.log("El total es"+totalDescuento);
}   else if(cantida>=12 ){
    let totalDescuento = precio *0.4;
    console.log("El total es"+totalDescuento);
}
}

DeterminarColesterolLDL = function(){
    let nivelColesterol;

    if (nivelColesterol < 100){
        console.log("Deseable");
    }else if (nivelColesterol >=100 && nivelColesterol <=129){
        console.log("Casi optimo")
    }else if(nivelColesterol>=130 && nivelColesterol <=159){
        console.log("Limite superior del rango nomal")
    }else if(nivelColesterol>=160 && nivelColesterol <=189){
        console.log("Alto")
    }else if(nivelColesterol>=190 ){
        console.log("Muy Alto")
    }
}

validarClave = function(){
    let clave = "Pablofsreeb";
    if(clave.length<=7 & clave.length>=13){
        alert ("Debes ingresar una clave cob caracteres mayor a 7")
    return false;
    }else{
    return true
}
}
esMinuscula = function(){
    let letra 
    if(letra >= "97" && letra<="122"){
        console.log("EL caracter es minuscula")
    }
}
esMayuscula=function(){
    let letra
    if(letra >= "65" && letra<="90"){
        console.log("EL caracter es Mayuscula")
    }

}
esDigito = function(){
    let digito;
    if(letra >= "48" && letra<="57"){
        console.log("EL caracter es un digito")
    }
}
darPermiso = function(){
    let notaMatematica;
    let notaFisica;
    let notaGeometria;

    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso = function(){
    let notaMatematica;
    let notaFisica;
    let notaGeometria;

    if(notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
        return true;
    }else{
        return false;
    }

}

dejarSalir = function(){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        if(notaFisica >notaMatematica){
            return true;  
        }
        }   return false;
}