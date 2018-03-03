//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
     /* var importe;
    var maximo;
    var minimo; 

    var contador = 0;

    do{ 
        importe = parseInt(prompt("ingrese el importe")); 
        contador++ 

        if(contador == 1){
            maximo = importe;
            minimo = importe;
        }
        if(importe > maximo){
            maximo = importe;
        }
        if(importe < minimo){
            minimo = importe;
        }
}while(contador < 7 && importe > 0);

    alert("El importe mayor de venta es: " + maximo + " y el importe menor es: " + minimo); 
    */

    var venta;
    var maxventa;
    var diamax=0;
    var minventa;
    var diamin=0;
    var flag = 0;

    for(var i=1; i<=7; i++){
        
        venta = parseFloat(prompt("Ingrese la venta"));
        while(venta <=0){
            venta = parseFloat(prompt("Error. debe ingresar una venta mayor a cero"));
        }
        if(venta > maxventa || flag == 0){
            maxventa = venta;
            diamax++;
        }
        if(venta < minventa || flag == 0){
            minventa = venta; 
            diamin++;
            flag = 1
        }
    }
    alert("El importe mayor de venta es: " + maxventa + "el dia " + diamax + " y el importe menor es: " + minventa +"el dia " + diamin); 

}
