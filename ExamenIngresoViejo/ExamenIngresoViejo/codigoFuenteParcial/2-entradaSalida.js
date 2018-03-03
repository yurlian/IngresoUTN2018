//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe = parseInt(prompt("Ingrese su importe: "));
    var impuesto = importe * 0.21;
    var precioFinal = impuesto + importe; 

    document.getElementById("importe").value = precioFinal;
}

