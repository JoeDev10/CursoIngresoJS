/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

	// Función que calcula y muestra el aumento del 10% del salario de una persona
function mostrarAumento() {
	// Obtener el salario ingresado por el usuario
	let salario = document.getElementById('txtIdSueldo').value;
	
	// Convertir el salario a un entero
	parseInt(salario);
	
	// Calcular el aumento del 10% del salario
	let aumento = salario * 0.1;
	
	// Mostrar el aumento en un elemento de entrada de texto
	document.getElementById('txtIdResultado').value = aumento;
	
	// Mostrar una alerta con el aumento
	alert(aumento);
}
