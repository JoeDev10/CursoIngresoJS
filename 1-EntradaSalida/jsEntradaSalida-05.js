/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

	function mostrar() {

		// Obtiene el valor del elemento con id "txtIdNombre" y lo guarda en la variable nombre
		const nombre = document.getElementById('txtIdNombre').value;

		// Obtiene el valor del elemento con id "txtIdEdad" y lo guarda en la variable edad
		const edad = document.getElementById('txtIdEdad').value;

		// Crea un mensaje usando las variables nombre y edad
		const mensaje = "Usted se llama " + nombre + " y tiene " + edad + " años";

		// Muestra una ventana de alerta con el mensaje creado
		alert(mensaje);

}

