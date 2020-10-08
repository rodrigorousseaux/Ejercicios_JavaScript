/*Ejercicio 13
    13.Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
    (sólo hay que comprobar si lo es por uno de los cuatro)*/

        var num = parseInt(prompt("Ingrese un numero: "));
        
        if(num % 2 == 0){
            document.write(`El numero ${num} es divisible por 2`);
        }   
        else if(num % 3 == 0){
            document.write(`El numero ${num} es divisible por 3`);
        }
        else if(num % 5 == 0){
            document.write(`El numero ${num} es divisible por 5`);
        }
        else{
            document.write(`El numero ${num} es divisible por 7`);
        }