//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseInt(document.getElementById("ancho").value); 
    var largo = parseInt(document.getElementById("largo").value);
    var perimetro = (largo * 2) + (ancho * 2); 
    var alambrado = perimetro * 6; 

    alert("La cantidad de alambre que se requiere para cercar el terreno con 6 hilos es: " + alambrado);

}

