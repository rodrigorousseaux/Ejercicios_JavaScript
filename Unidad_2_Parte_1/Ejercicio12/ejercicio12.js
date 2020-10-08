/*
    12.una función que dado la longitud de un lado de un cuadrado devuelva la superficie.
*/

function calcularSuperficieDelCuadrado(base){

    return Math.pow(base,2);
}

var base = parseInt(prompt("Ingrese un lado del cuadrado"));

var superficie = calcularSuperficieDelCuadrado(base);

document.write(`El superficie del cuadrado es: ${superficie}`);