//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{/*
    var nota ;
    var acumulador = 0;
    var promedio; 
    var menor;
    var sexo ; 
    var contadorVarones = 0; 
    var contador = 0;

    do{
        nota = parseInt(prompt("Ingrese la nota: "));
        sexo = prompt("Ingrese el sexo: f/m"); 
        if(nota > 0 && nota <11){ 
        contador++; 
        acumulador = acumulador + nota; 
        }
        if(nota >= 6 && sexo == 'm'){
            contadorVarones++; 
        }
        if(contador == 1){
            menor = nota;
        }
        if(nota < menor){
            menor = nota;
        }

    } while(contador < 6); 
    
    promedio = acumulador / contador; 
    alert("El promedio de notas es: " + promedio + " , " + "La nota mas baja es: " + menor + " , "+ "Cantidad de varones con nota <= 6 es: " + contadorVarones);
*/

    var nota;
    var sexo; 
    var promedio;
    var notamin;
    var acumulador = 0;
    var contadorVarones = 0; 
    var flag = 0; 

    for(var i = 0; i<6 ; i++){

        nota = parseInt(prompt("ingrese la nota"));
            while(nota<0 || nota >10){
                nota = parseInt(prompt("Error la nota debe ser entre 0 y 10, intentelo de nuevo"));
            }

        sexo = prompt("ingrese el sexo f/m");
        sexo = sexo.toLowerCase();

            while(sexo != 'f' || sexo != 'm'){
                sexo = prompt("Error ingrese un sexo valido f o m");
            }
        
        acumulador = nota + acumulador;
         
        if( nota < notamin || flag ==0){
            notamin = nota;
            flag = 1; 
        }
        
        if (sexo == 'm' && nota >= 6 ){
            contadorVarones++
        }
    }
    promedio = acumulador / 6; 
    alert("a\) El promedio de notas es: " + promedio.toFixed(2) + "\nb\)La nota mas baja es: " + notamin + "\nc\) La cantidad de varones con nota >= 6 es: " + contadorVarones);
}

