/*Ejercicio 15
15.Escribir un programa que escriba en pantalla los divisores de un número dado*/

    var num = parseInt(prompt("Ingrese un numero: "));
    
    document.write(`Divisores de ${num}: `)
    for(var i = 1; i <= num; i++){

        if(num % i == 0){
            document.write(i + ", ")
        }
    }