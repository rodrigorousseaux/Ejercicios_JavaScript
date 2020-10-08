/*Ejercicio 7
    7-Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
    
        var num1 = parseInt(prompt("Ingrese el primer numero: "));
        var num2 = parseInt(prompt("Ingrese el segundo numero: "));
        var num3 = parseInt(prompt("Ingrese el tercer numero: "));

        if(num1 > num2 && num1 > num3){
            document.write(`El mayor es ${num1}`);
        }
        else if(num2 > num1 && num2 > num3){
           document.write(`El mayor es ${num2}`); 
        }
        else if(num3 > num1 && num3 > num2){
            document.write(`El mayor es ${num3}`);
        }
        else{
            document.write(`Son iguales`);
        }
