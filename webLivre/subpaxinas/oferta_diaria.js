/* 
	Código en JavaScript
	Nome do ficheiro: oferta_diaria.js
*/
function enviar() {
	var nombre = document.getElementById("nombre").value;
	var numTarx = document.getElementById("numTarx").value;
	var numTarx = parseInt(numTarx);
	var producto = document.getElementById("producto").value;
	var producto = parseInt(producto);
	
	/*Operación*/
	if(producto == 1){
		var resultado = "O cliente " + nombre + " co número de conta " + numTarx + " seleccionou Calígula 50% á beneficencia";
	}
	else if (producto == 2 ){
		var resultado = "O cliente " + nombre + " co número de conta " + numTarx + " seleccionou o libro misterioso";
	}
	else{
		var resultado = "Produciuse un erro na solicitude";
	}
	document.getElementById("parrafada").innerHTML = resultado ;
}