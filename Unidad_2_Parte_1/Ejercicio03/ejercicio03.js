/*
    3.Crear una función que se llame promedio3, que reciba como parámetro 
    tres valores y devuelva el promedio de los mismos
*/

function promedio3(num1, num2, num3){

    var promedio = (num1 + num2 + num3) / 3;

    return promedio;
}

var num1 = parseFloat(prompt("Ingrese el primer número"));
var num2 = parseFloat(prompt("Ingrese el segundo número"));
var num3 = parseFloat(prompt("Ingrese el tercer número"));

promedio = promedio3(num1, num2, num3);

document.write(`El promedio es: ${promedio}`);


