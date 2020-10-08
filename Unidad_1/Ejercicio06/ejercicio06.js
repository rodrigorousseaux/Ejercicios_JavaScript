/*Ejercicio 6
    6-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor*/

        var num1 = parseInt(prompt("Ingrese el primer numero: "));
        var num2 = parseInt(prompt("Ingrese el segundo numero: "));

        if(num1 > num2){
            document.write(`El mayor es ${num1}`);
        }
        else{
           document.write(`El mayor es ${num2}`); 
        }
    

