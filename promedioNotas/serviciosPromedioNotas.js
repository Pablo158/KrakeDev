calcularPromedio = function(primeraNota,segundaNota,TerceraNota){

    let promedio = primeraNota+segundaNota+TerceraNota
    let promedioR = promedio/3
    var PromedioconDecimal = promedioR.toFixed(2); 

    return PromedioconDecimal
}

