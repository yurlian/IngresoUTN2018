function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//meses de 31 dias (enero, marzo, mayo, julio, agosto, octubre, diciembre)
//meses de 30 dias (abril, junio, septiembre, noviembre)
//28 dias (febrero)

    switch (mesDelAño){
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Este mes tiene 30 días");
            break;
        case "Febrero":
            alert("Este mes tiene 28 días");
            break;
        default:
            alert("Este mes tiene 31 días");
            break;
    }

}//FIN DE LA FUNCIÓN