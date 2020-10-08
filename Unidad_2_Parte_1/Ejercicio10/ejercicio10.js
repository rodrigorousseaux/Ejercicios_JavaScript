/*
    10.Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado 
    que dado un número por parámetro, imprima cual es el valor del doble del siguiente al cuadrado del numero. 
    Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado
*/

function cuadrado(num){

    return Math.pow(num,2);
}

function doble(num){

    return num * 2;
}

function siguiente(num){

    return num + 1;
}

function imprimirElDobleDelSiguienteAlCuadrado(num){

    numSiguiente = siguiente(num);

    dobleDelSiguiente = doble(numSiguiente);

    dobleDelSiguienteAlCuadrado = cuadrado(dobleDelSiguiente);

    document.write(`El doble del siguiente al cuadrado de ${num} es: ${dobleDelSiguienteAlCuadrado}`);

    return;
}

var num = parseInt(prompt("Ingrese un numero"));

imprimirElDobleDelSiguienteAlCuadrado(num);