function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numero <0 || numero >10){
		numero = parseInt(prompt("El numero ingresado no es correcto ")); 
	}
	alert("Número validado, Gracias");
	document.getElementById("Numero").value = numero; 

//VERIFICAR PARA QUE FUNCIONE LA TECLA CANCELAR SIN ENTRAR EN LA CONDICION Y VERIFICAR SI EL ELEMENTO 
//INGRESADO ES UN NUMERO (IsNaN)

}//FIN DE LA FUNCIÓN