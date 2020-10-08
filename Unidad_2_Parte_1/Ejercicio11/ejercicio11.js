/*
    11.una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
*/

function calcularPerimetroDelCuadrado(lado){

    return lado * 4;
}

var lado = parseInt(prompt("Ingrese un lado del cuadrado"));

var perimetro = calcularPerimetroDelCuadrado(lado);

document.write(`El perimetro del cuadrado es: ${perimetro}`)