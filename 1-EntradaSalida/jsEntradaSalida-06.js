/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() {

	// Obtiene el valor del elemento con id "txtIdNumeroUno" y lo guarda en la variable num1
	const num1 = document.getElementById('txtIdNumeroUno').value;

	// Obtiene el valor del elemento con id "txtIdNumeroDos" y lo guarda en la variable num2
	const num2 = document.getElementById('txtIdNumeroDos').value;

	// Convierte los valores de num1 y num2 a enteros y los suma
	const resultado = parseInt(num1) + parseInt(num2);

// Muestra una ventana de alerta con el resultado de la suma
	alert(resultado);
}

