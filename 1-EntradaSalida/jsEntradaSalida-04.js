/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	
// Pide al usuario que ingrese un dato y lo guarda en la variable val
	const val = prompt('Ingrese un dato:');

// Obtiene el elemento con id "txtIdNombre" y lo guarda en la variable element
	const element = document.getElementById('txtIdNombre');

// Establece el valor del elemento en el valor de la variable val
	element.value = val;
}
