/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// Obtiene el valor del elemento con id "txtIdNumeroDividendo" y lo guarda en la variable dividendo
	let dividendo = document.getElementById("txtIdNumeroDividendo").value;

	// Obtiene el valor del elemento con id "txtIdNumeroDivisor" y lo guarda en la variable divisor
	let divisor = document.getElementById("txtIdNumeroDivisor").value;

	// Convierte los valores de dividendo y divisor a enteros
	parseInt(dividendo);
	parseInt(divisor);

// Calcula el resto de la división de dividendo entre divisor
	let resto = dividendo % divisor;

// Muestra una ventana de alerta con el resultado del cálculo
alert("El resto es: " + resto);
}
