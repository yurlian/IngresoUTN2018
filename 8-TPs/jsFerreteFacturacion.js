/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var monto1 = parseInt(document.getElementById("PrecioUno").value); 
    var monto2 = parseInt(document.getElementById("PrecioDos").value);
    var monto3 = parseInt(document.getElementById("PrecioTres").value);
    var total = monto1 + monto2 + monto3; 

   alert("La suma de los productos es: " + total);
}
function Promedio () 
{
    var monto1 = parseInt(document.getElementById("PrecioUno").value); 
    var monto2 = parseInt(document.getElementById("PrecioDos").value);
    var monto3 = parseInt(document.getElementById("PrecioTres").value);
    var total = (monto1 + monto2 + monto3) / 3; 

    alert("El promedio de sus productos es. " + total);
}
function PrecioFinal () 
{
    var monto1 = parseInt(document.getElementById("PrecioUno").value); 
    var monto2 = parseInt(document.getElementById("PrecioDos").value);
    var monto3 = parseInt(document.getElementById("PrecioTres").value);
    var total = monto1 + monto2 + monto3; 
    var impuesto = total * 0.21;
    var final = total + impuesto; 
    
    alert("El precio total con impuesto es: " + final);
}