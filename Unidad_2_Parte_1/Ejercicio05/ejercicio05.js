/*
    5.Una función que se llame siguiente, que reciba como parámetro 
    un valor entero, y devuelva el siguiente del número ingresado como parámetro
*/

function siguiente(num){

    return num + 1;
}

var num = parseInt(prompt("Ingrese un numero"));

numSiguiente = siguiente(num);

document.write(`El numero siguiente es: ${numSiguiente}`);