function mostrar() {
	// Obtener el valor del campo de texto
	let age = document.getElementById("txtIdEdad").value;

	// Crear un elemento div dinámicamente
	let resultadoDiv = document.createElement("div");

	// Asignar el ID "resultado" al elemento div
	resultadoDiv.id = "resultado";

	// Si la edad es mayor o igual a 18, establecer el contenido del elemento div en el mensaje "Mayor de edad"
	if (age >= 18) {
		resultadoDiv.innerHTML = "Mayor de edad";
	}

	// Añadir el elemento div al cuerpo de la página
	document.body.appendChild(resultadoDiv);
}



//FIN DE LA FUNCIÓN