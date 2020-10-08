/*Ejercicio 14
    14.Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible 
    (hay que decir todos por los que es divisible)*/

        var num = parseInt(prompt("Ingrese un numero: "));
        
        if(num % 2 == 0 && num % 3 == 0){
            document.write(`El numero ${num} es divisible por 2 y por 3`);
        }   
        else if(num % 2 == 0 && num % 5 == 0){
            document.write(`El numero ${num} es divisible por 2 y por 5`);
        }
        else if(num % 2 == 0 && num % 7 == 0){
            document.write(`El numero ${num} es divisible por 2 y por 7`);
        }
        else if(num % 3 == 0 && num % 5 == 0){
            document.write(`El numero ${num} es divisible por 3 y por 5`);
        } 
        else if(num % 3 == 0 && num % 7 == 0){
            document.write(`El numero ${num} es divisible por 3 y por 7`);
        } 
        else if(num % 5 == 0 && num % 7 == 0){
            document.write(`El numero ${num} es divisible por 5 y por 7`);
        } 
        else if(num % 2 == 0){
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