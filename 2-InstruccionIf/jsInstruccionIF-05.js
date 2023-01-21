//definimos nuestra función mostrar 
function mostrar() {
    //tomamos el valor del input de edad
    var edad = document.getElementById("txtIdEdad").value;
    // Si la edad esta entre 13 y 17 años entonces 
    if(edad>=13 && edad<=17){
        //No hace nada
    }else{
        //mostramos un mensaje indicando que no es adolescente
        alert("No eres adolescente");
    }
}


//FIN DE LA FUNCIÓN