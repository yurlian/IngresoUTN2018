/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    var nombre;
    
    nombre = document.getElementById("elNombre").value;

    alert("Usted lleva por nombre " + nombre);

    /*Otra manera mas corta;

    alert("Usted lleva por nombre " + (document.getElementById("elNombre").value)); */
}


