/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


// Esta es la función mostrar()
function mostrar() {

    // Obtiene el valor del elemento con id "txtIdNombre" y lo guarda en la variable nombre
    var nombre = document.getElementById("txtIdNombre").value;

    // Muestra una ventana de alerta con el valor de la variable nombre
    alert(nombre);
}
