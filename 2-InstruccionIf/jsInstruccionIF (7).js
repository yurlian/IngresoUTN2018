function Mostrar()
{
//tomo la edad  

    var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value

  /*  if (!( edad > 17) && (estadoCivil != "Soltero")){
        alert("Es muy pequeño para NO ser soltero");
    }  */

    //OTRA MANERA DE HACERLO MAS DIRECTO SIN NEGAR TANTO

    if (edad <18 && estadoCivil != "Soltero"){
        alert("Es muy pequeño para NO ser soltero")
    }

}//FIN DE LA FUNCIÓN