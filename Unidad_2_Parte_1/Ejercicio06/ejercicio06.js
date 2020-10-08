/*
    6.Una función que se llame doble, que reciba como parámetro un valor, 
    y devuelva el doble del número ingresado como parámetro.
*/

function doble(num){

    return num * 2;
}

var num = parseInt(prompt("Ingrese un numero"));

numDoble = doble(num);

document.write(`El doble de ${num} es: ${numDoble}`);