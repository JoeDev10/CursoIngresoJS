//Declaración de la función mostrar
function mostrar(){
    //Asignación de una nota aleatoria a la variable nota
    var nota = Math.floor(Math.random() * 11);

    //Estructura de control IF
    if(nota == 9 || nota == 10){
        alert("EXCELENTE");
    }else if(nota > 4){
        alert("APROBÓ");
    }else{
        alert("Vamos, la proxima se puede");
    }
}
//FIN DE LA FUNCIÓN