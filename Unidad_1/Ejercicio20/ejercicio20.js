/*Ejercicio 20
    20. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
    Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión*/

        var continuar = true;

        while(continuar){
            var frase = prompt("Ingrese una frase: ");

            if(frase == "cancelar"){
                continuar = false;
            }
            else{
                document.write(frase + "-")
            }
        }