function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do{ 
		numero = parseInt(prompt("Ingrese un numero "));
		contador++;
		acumulador = acumulador + numero;
		
		respuesta = prompt("Desea continuar:? s/n ");

	}while(respuesta == "s");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN