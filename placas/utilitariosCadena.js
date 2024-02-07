esMayuscula = function(cadena){

    let caracter1;
    let caracter2;
    let caracter3;
    let resultado;

    caracter1 = cadena.charCodeAt(0);
    caracter2 = cadena.charCodeAt(1);
    caracter3 = cadena.charCodeAt(2);

    if((caracter1 >= 65 && caracter1 <= 90) && (caracter2 >= 65 && caracter2 <= 90)&&(caracter3 >= 65 && caracter3 <= 90)){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}

esDigito = function(digito, tieneOcho){

    let caracter5 = digito.charCodeAt(4);
    let caracter6 = digito.charCodeAt(5);
    let caracter7 = digito.charCodeAt(6);
    let caracter8 = digito.charCodeAt(7);
    let validacion;

    if(tieneOcho){
        if((caracter5 >=48 && caracter5<=57) && (caracter6 >=48 && caracter6<=57) && (caracter7 >=48 && caracter7<=57)&& (caracter7 >=48 && caracter7<=57)&& (caracter8 >=48 && caracter8<=57)){
        validacion = true;
            }else{
            validacion = false;
            }

    }else{
        if((caracter5 >=48 && caracter5<=57) && (caracter6 >=48 && caracter6<=57) && (caracter7 >=48 && caracter7<=57)&& (caracter7 >=48 && caracter7<=57)){
            validacion= true;
        }else{
            validacion=false;
        }
    }
    return validacion;
    }


esGuion = function(guion){
    let caracter4 = guion.charCodeAt(3);

    if(caracter4 == 45){
        return true;
    }else{
        return false;
    }
}