/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

// Esta es la función mostrar()
function mostrar() {
    
    // Pide al usuario que ingrese su nombre y lo guarda en la variable nombre
let nombre = prompt("Ingresa tu nombre:");

  // Muestra una ventana de alerta con un mensaje personalizado usando el nombre ingresado por el usuario
alert("Hola " + nombre + "!");
}