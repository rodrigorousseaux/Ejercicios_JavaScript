/*Ejercicio 17
    17.Escribir un programa que nos diga si un número dado es primo 
    (no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

        var num = parseInt(prompt("Ingrese el número: "));
        var contador = 0;

        for(var i = 2; i < num; i++){

            if(num % i == 0){
                contador++;
            }
        } 

        if(num == 1 || contador > 0){
            document.write(`${num} NO es primo`)
        }
        else{
            document.write(`${num} SI es primo`)
        }