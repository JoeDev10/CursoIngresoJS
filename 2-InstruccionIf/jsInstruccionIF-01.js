function mostrar() {
  // Obtener el valor del campo de texto
  let age = document.getElementById("txtIdEdad").value;

  // Crear un elemento div dinámicamente
  let resultadoDiv = document.createElement("div");

  // Asignar el ID "resultado" al elemento div
  resultadoDiv.id = "resultado";

  // Si la edad es 15, establecer el contenido del elemento div en el mensaje "niña bonita"
  if (age === "15") {
    resultadoDiv.innerHTML = "niña bonita";
  }

  // Añadir el elemento div al cuerpo de la página
  document.body.appendChild(resultadoDiv);
}
