/*Ejercicio 16
    16.Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/

        var num1 = parseInt(prompt("Ingrese el primer numero: "));
        var num2 = parseInt(prompt("Ingrese el segundo numero: "));

        if(num1 > num2){
            var mayor = num1;
        }
        else{
            var mayor = num2;
        }

        document.write(`Divisores en comun de ${num1} y ${num2}: `)
        for(var i = 1; i <= mayor; i++){

            if(num1 % i == 0 && num2 % i == 0){
                document.write(i + ", ")
            }
        }