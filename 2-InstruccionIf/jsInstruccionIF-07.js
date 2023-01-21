function mostrar() {
    // Obtener los valores ingresados por el usuario
    var edad = document.getElementById("txtIdEdad").value;
    var estadoCivil = document.getElementById("estadoCivil").value;

    // Validar si la edad es menor a 18 y el estado civil es distinto a "Soltero"
    if (edad < 18 && estadoCivil != "Soltero") {
        // Mostrar el mensaje
        alert("Es muy pequeño para NO ser soltero.");
    }
}
//FIN DE LA FUNCIÓN