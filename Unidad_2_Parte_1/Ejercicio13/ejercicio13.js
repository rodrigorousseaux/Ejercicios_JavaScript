/*
    13.una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del circulo)
*/

function calcularPerimetroDelCirculo(radio){

    return 2 * Math.PI * radio;
}

var radio = parseFloat(prompt("Ingrese el radio del circulo"));

var circunferencia = calcularPerimetroDelCirculo(radio);

document.write(`El perimetro del circulo de radio ${radio} es: ${circunferencia}`);