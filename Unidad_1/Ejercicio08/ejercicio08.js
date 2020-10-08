/*Ejercicio 8
    8-Escribe un programa que pida un número y diga si es divisible por 2*/

        var num = parseInt(prompt("Ingrese un numero: "));

        if(num % 2 == 0){
            document.write(`El numero es divisible por 2`);
        }
        else{
            document.write(`El numero NO es divisible por 2`); 
        }