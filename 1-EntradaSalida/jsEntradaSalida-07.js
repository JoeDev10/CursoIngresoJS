/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	function sumar() {

		  // Obtiene el valor del elemento con id "txtIdNumeroUno" y lo guarda en la variable num1
		const num1 = document.getElementById('txtIdNumeroUno').value;

		  // Obtiene el valor del elemento con id "txtIdNumeroDos" y lo guarda en la variable num2
		const num2 = document.getElementById('txtIdNumeroDos').value;

		  // Convierte los valores de num1 y num2 a enteros y los suma
		const resultado = parseInt(num1) + parseInt(num2);

		  // Crea un mensaje con el resultado de la suma
		const mensaje = "la suma es " + resultado;

		  // Muestra una ventana de alerta con el mensaje
		alert(mensaje)
}

function restar()
{
	const num1 =
	document.getElementById('txtIdNumeroUno').value;
	const num2 =
	document.getElementById('txtIdNumeroDos').value;
	const resultado = parseInt(num1) - parseInt(num2);
	const mensaje = "la resta es " + resultado;

	alert(mensaje);
}

function multiplicar()
{ 
	const num1 = document.getElementById('txtIdNumeroUno').value;
	const num2 = document.getElementById('txtIdNumeroDos').value;
	const resultado = parseInt(num1) * parseInt(num2);
	const mensaje = "La multiplicación es " + resultado;

	alert(mensaje);
}

function dividir()
{
	const num1 = document.getElementById('txtIdNumeroUno').value;
    const num2 = document.getElementById('txtIdNumeroDos').value;
    const resultado = parseInt(num1) / parseInt(num2);
    const mensaje = "la division es " + resultado;

    alert(mensaje);
}

