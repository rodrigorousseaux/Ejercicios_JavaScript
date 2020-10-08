/*
    9.Una función que se denomine imprimirElDobleDelSiguiente que dado un número 
    por parámetro, imprima cual es el valor siguiente al el doble. 
    Usando las funciones definidas en los puntos 5) , 6) : siguiente, el doble.
*/

function doble(num){

    return num * 2;
}

function siguiente(num){

    return num + 1;
}

function imprimirElDobleDelSiguiente(num){

    numDoble = doble(num);

    document.write(`El doble de ${num} es: ${numDoble} <br/>`);

    numSiguienteAlDoble = siguiente(numDoble);

    document.write(`El numero siguiente al del doble es: ${numSiguienteAlDoble} <br/>`);


    return;
}

var num = parseInt(prompt("Ingrese un numero"));

imprimirElDobleDelSiguiente(num);