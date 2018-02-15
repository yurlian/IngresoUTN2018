function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio){
        case "Enero":
           
        case "Febrero":
           
        case "Marzo":
           
        case "Abril":
            
        case "Mayo":
           
        case "Junio":
            alert("Falta para el invierno");
            break;
//EMPLEANDOLO DE ESTA MANERA INGRESA EN TODOS LOS CASE ANTERIORES Y SE ESCRIBE MENOS CODIGO
        case "Julio": 
          
        case "Agosto":
            alert("Abrigate que hace frio");
            break;

        default:
            alert("Ya pasamos el frio, ahora calor!!!");
            break;
    }




}//FIN DE LA FUNCIÓN