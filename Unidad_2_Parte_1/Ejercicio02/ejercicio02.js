/*
    2.Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.
*/

function calcularMaximo(num1, num2){

    if(num1 > num2){
        document.write(`El mayor es ${num1}`);
    } 
    else{
        document.write(`El mayor es ${num2}`)
    }
}

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));

calcularMaximo(num1, num2);


