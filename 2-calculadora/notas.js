calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}
/*
calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if(isNaN(nota1)){
        alert("Error")
    }else{
        nota2=recuperarFloat("txtNota2");
        if (isNaN(nota2)){
            alert("Error")
        }else{
            nota3=recuperarFloat("txtNota3");
            if (isNaN(nota3)){
                alert("Error")
        }else{
            resultado = calcularPromedio(nota1, nota2, nota3);
            resultadoFormato = resultado.toFixed(2);
            mostrarTexto("lblResultado", resultadoFormato);
        }
    }
    
}
*/

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existEror = false
        nota1 = recuperarFloat("txtNota1");
        if(isNaN(nota1)){
            mostrarTexto("lblError1","Debe ingresar un numero")
            existEror = true;
        }else{
            mostrarTexto("lblError1","")
        }
        nota2=recuperarFloat("txtNota2");
        if(isNaN(nota2)){
            mostrarTexto("lblError2","Debe ingresar un numero")
            existEror = true;
        }else{
            mostrarTexto("lblError2","")
        }
        nota3=recuperarFloat("txtNota3");
        if(isNaN(nota3)){
            mostrarTexto("lblError3","Debe ingresar un numero")
            existEror = true;
        }else{
            mostrarTexto("lblError3","")
        }
        if(existEror == false){
            resultado = calcularPromedio(nota1, nota2, nota3);
            resultadoFormato = resultado.toFixed(2);
            mostrarTexto("lblResultado", resultadoFormato);
        }


        }
 
    calcular = function () {
            let nota1;
            let nota2;
            let nota3;
            let resultado;
            let resultadoFormato;
            let existEror = false
                nota1 = recuperarFloat("txtNota1");
                esnotaValida(nota1,"lblError1")
                /*if(isNaN(nota1)){
                    mostrarTexto("lblError1","Debe ingresar un numero")
                    existEror = true;
                }else{
                    mostrarTexto("lblError1","")
                */ 
                nota2=recuperarFloat("txtNota2");
                esnotaValida(nota2,"lblError2")
                nota3=recuperarFloat("txtNota3");
                esnotaValida(nota3,"lblError3")

                if(esnotaValida(nota1,"lblError1")&&esnotaValida(nota2,"lblError2")&&esnotaValida(nota3,"lblError3")){
                    resultado = calcularPromedio(nota1, nota2, nota3);
                    resultadoFormato = resultado.toFixed(2);
                    mostrarTexto("lblResultado", resultadoFormato);
                }else{
                    mostrarTexto("lblResultado", "0.0");
                }
        
                }


    esCampoValida= function(nota, idComponenete){
        if(isNaN(nota)){
            mostrarTexto(idComponenete,"Debe ingresar un numero")
            existEror = false;
        }else{
            if(nota>=0 && nota<=10){
                mostrarTexto(idComponenete,"")
                return true;
            }else{
                mostrarTexto(idComponenete,"Debe ser del 0 al 10")
                existEror = false;

            }

          
        }

    }

