function mostrar() {
    // Obtener el valor ingresado en el campo de texto "txtIdEdad"
    var edad = document.getElementById("txtIdEdad").value;

    // Comparar el valor de la edad con los límites establecidos
    if (edad >= 18) {
        // Si el valor de la edad es mayor o igual a 18, mostrar un mensaje indicando que la persona es mayor de edad
        alert("La persona es mayor de edad.");
    } else if (edad >= 13 && edad <= 17) {
        // Si el valor de la edad es mayor o igual a 13 y menor o igual a 17, mostrar un mensaje indicando que la persona es adolescente
        alert("La persona es adolescente.");
    } else {
        // Si el valor de la edad es menor a 13, mostrar un mensaje indicando que la persona es un niño
        alert("La persona es un niño.");
    }
}

//FIN DE LA FUNCIÓN