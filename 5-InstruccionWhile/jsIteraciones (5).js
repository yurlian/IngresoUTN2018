function Mostrar()
{

var sexo = prompt("ingrese f ó m");
sexo = sexo.toLowerCase();
/*
    while(sexo != "f" && sexo != "m" && sexo != null ) 
En esta condicion se evaluan los elementos que son distintos de los que hacebn true la condicion 
*/  
    while(!(sexo == 'f' || sexo == 'm' || sexo == null)) 
//En esta condicion se niega los elementos que dan tru y se entra  
   
    {
       sexo =prompt("Error, ingrese un valor valido");
       sexo = sexo.toLowerCase();
    }
        if( sexo == 'f'){
            sexo = "Femenino"; 
        }else{
            sexo = "Masculino";
        }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN