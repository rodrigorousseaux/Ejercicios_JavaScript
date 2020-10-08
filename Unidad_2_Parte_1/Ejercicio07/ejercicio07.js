/*
    7.Una función que se llame cuadrado, que reciba como parámetro un valor, 
    y devuelva el valor del numero ingresado como parámetro elevado al cuadrado.
*/

function cuadrado(num){

    return Math.pow(num,2);
}

var num = parseInt(prompt("Ingrese un numero"));

cuadrado = cuadrado(num);

document.write(`El cuadrado de ${num} es: ${cuadrado}`);