let puntosUsuario=0;
let puntosMaquina=0;
//var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);




    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
                puntosMaquina++;   
                cambiarTexto("idMaquina",puntosMaquina+" Maquina");
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';

        }else if(opciones[eleccionMaquina] == 2){
                puntosUsuario++;
                cambiarTexto("idUsuario",puntosUsuario+" Usuario")
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';

        }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
       
    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){

                puntosMaquina++;   
                cambiarTexto("idMaquina",puntosMaquina+" Maquina");
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                puntosUsuario++;
                cambiarTexto("idUsuario",puntosUsuario+" Usuario")
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';


            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
                puntosUsuario++;
                cambiarTexto("idUsuario",puntosUsuario+" Usuario")
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';

        }else{
            if(opciones[eleccionMaquina] == 0){
                puntosMaquina++;   
                cambiarTexto("idMaquina",puntosMaquina+" Maquina");
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }
    if(puntosMaquina == 5) {
        document.getElementById('efecto').innerHTML ='<h1>La maquina gano</h1> '; 
    }else if(puntosUsuario == 5){
        document.getElementById('efecto').innerHTML ='<h1>La maquina te ha vencido</h1> '; 

    }
    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}

limpiar=function(){
    cambiarTexto("idMaquina","Maquina");
    cambiarTexto("idUsuario", "Usuario");
  
}