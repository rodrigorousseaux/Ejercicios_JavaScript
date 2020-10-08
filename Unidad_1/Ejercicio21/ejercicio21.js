/*Ejercicio 21
    21. Realiza un script que pida números hasta que se pulse “cancelar”. 
    Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
    Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

var num;
var suma = 0;
var continuar = true;    

while(continuar){

    num = prompt("Ingrese un numero")

    if(parseInt(num) == num){
        suma += parseInt(num);
    }
    else{

        if(num != undefined){

            if(num == "cancelar"){
                continuar = false;
            }
            else{
                alert(`${num} no es un numero`);
            }
        }
    }
}

document.write(`La suma es: ${suma}`)
