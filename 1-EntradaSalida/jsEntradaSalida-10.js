/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

		// Función que calcula y muestra el importe con un descuento del 25%
function mostrarDescuento() {
	// Obtener el importe ingresado por el usuario
	let importe = document.getElementById('txtIdImporte').value;
	
	// Convertir el importe a un entero
	parseInt(importe);
	
	// Calcular el descuento del 25% del importe
	let descuento = importe * 0.25;
	
	// Calcular el importe con descuento
	let importeConDescuento = importe - descuento;
	
	// Mostrar el importe con descuento en un elemento de entrada de texto
	document.getElementById('txtIdResultado').value = importeConDescuento;

	alert(importeConDescuento)

}
