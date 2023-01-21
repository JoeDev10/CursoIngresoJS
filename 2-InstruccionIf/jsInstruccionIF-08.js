function mostrar() {
    // Obtener los valores ingresados por el usuario
    var edad = document.getElementById("txtIdEdad").value;
    var estadoCivil = document.getElementById("estadoCivil").value;

    // Validar si la edad es mayor o igual a 18 y el estado civil es "Soltero"
    if (edad >= 18 && estadoCivil == "Soltero") {
        // Mostrar el mensaje
        alert("Es soltero y no es menor.");
    }
}

//FIN DE LA FUNCIÓN