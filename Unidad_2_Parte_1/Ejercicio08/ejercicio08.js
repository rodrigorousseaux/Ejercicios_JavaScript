/*
    8.Una función que se denomine imprimirValores que dado un número por parámetro, 
    imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones 
    definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.
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

function imprimirValores(num){

    numSiguiente = siguiente(num);
    document.write(`El numero siguiente es: ${numSiguiente} <br/>`);

    numDoble = doble(num);
    document.write(`El doble de ${num} es: ${numDoble} <br/>`);

    numCuadrado = cuadrado(num);
    document.write(`El cuadrado de ${num} es: ${numCuadrado}`);

    return;
}

var num = parseInt(prompt("Ingrese un numero"));

imprimirValores(num);