/*
    14.una función que dado el radio de una círculo devuelva el area del circulo
*/

function calcularAreaDelCirculo(radio){

    return Math.PI * Math.pow(radio,2);
}

var radio = parseFloat(prompt("Ingrese el radio del circulo"));

var area = calcularAreaDelCirculo(radio);

document.write(`El area del circulo de radio ${radio} es: ${area}`);